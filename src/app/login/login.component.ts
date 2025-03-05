import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';
// import { GoogleLoginProvider, SocialAuthService, SocialUser } from '                                                                                       ';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',                                                            
  styleUrls: ['./login.component.css']                                                                                                                                                  })                                                                                                                                                                                                                              
export class LoginComponent implements OnInit {

  constructor(private r: Router, private fb: UntypedFormBuilder,
    // private socialAuthService: SocialAuthService,
    private tstr:ToastrService,                                                                                                               
    
    private s: ZeetaService) { }
  // socialUser!:SocialUser;
  ngOnInit(): void {
    if(localStorage.getItem('tutoUser')){
      this.r.navigateByUrl('home')
    }
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   if (user) {
    //     this.s.register(this.socialUser).subscribe((r:any) => {
    //       if(r.code == 0){
    //         localStorage.setItem('tutoUser',JSON.stringify(r['user']))
    //         this.r.navigateByUrl('home')
    //       }else if(r.code == 1){
    //         localStorage.setItem('tutoUser',JSON.stringify(r['user']))
    //         this.r.navigateByUrl('home')
    //       }
    //     });
    //   }
    // });
  }

  slx(){
    console.log("kjdfj")
 
  }
  
  // signInWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
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
      this.tstr.success("Successfully Logged In")
        }
        else {
          this.s.ancerText = r['msg']
          this.r.navigateByUrl('announcer')
        }
      })
  }
}
