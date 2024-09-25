import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';
import { ZeetaService } from './zeeta.service';
declare var FirebasePlugin: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]

})
export class AppComponent implements OnInit {
  title = 'Toyo';
  constructor(private s: ZeetaService) { }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit(): void {
    // this.s.sendNotifTokenToServer()
    this.getToken()
  }
  token = ''
  getToken() {
    setTimeout(() => {

      FirebasePlugin.getToken(async (token: any) => {
        let user = JSON.parse(localStorage.getItem('tutoUser')!)
        user.firebaseToken = token;
        localStorage.setItem('tutoUser', JSON.stringify(user))
        this.token = token
        // alert("Got FCM token: " + JSON.parse(localStorage.getItem('tutoUser')!)['firebaseToken'])
        try {
          const response = await fetch(`https://api-reportkad.onrender.com/apiTuto/update-notificationtoken?id=${user._id}&account_no=${user.account_no}&firebaseToken=${user.firebaseToken}`)
        } catch (error: any) {
          alert(error.message)
        }
      }, (error: any) => {
        alert(error)
      });
    }, 20000);

  };
}
