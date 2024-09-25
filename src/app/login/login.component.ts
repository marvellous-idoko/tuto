import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';

import {

  SocialAuthService,

  GoogleLoginProvider,

  SocialUser,

} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r: Router, private fb: FormBuilder, private s: ZeetaService, private socialAuthService:SocialAuthService) { }
  socialUser!:SocialUser;
  ngOnInit(): void {
    // if(localStorage.getItem('tutoUser')){
    //   this.r.navigateByUrl('home')
    // }
 

    this.socialAuthService.authState.subscribe((user) => {

      this.socialUser = user;

      if (user) {

        // this.isLoggedin = user != null;

        this.s.register(this.socialUser).subscribe((r:any) => {
          localStorage.setItem('tutoUser',JSON.stringify(r['user']))
          this.r.navigateByUrl('home')
        });

      }

    });
  }

  slx(){
    console.log("kjdfj")
   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData =>{
      console.log(userData)
    })
  }
  kil = this.fb.group({
    email: [null, Validators.required],
    pwd: [null, Validators.required],
  })
  loader=false
  login() {
    this.loader = true;
    this.s.login(this.kil.value)
      .subscribe((r: { [key: string]: any }) => {
    this.loader = false;
    if (r['code'] == 1) {
          localStorage.setItem('tutoUser',JSON.stringify(r['msg']))
          this.r.navigateByUrl('home')
          alert('success')
        }
        else {
          this.s.ancerText = r['msg']
          this.r.navigateByUrl('announcer')
        }
      })
  }
}
