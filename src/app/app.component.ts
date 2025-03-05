import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';
import { ZeetaService } from './zeeta.service';
import { ToastrService } from 'ngx-toastr';
declare var FirebasePlugin: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]

})
export class AppComponent implements OnInit {
  title = 'Toyo';
  constructor(private s: ZeetaService, private t:ToastrService) { }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.s.sendNotifTokenToServer()    
    }, 15000);
  }
}