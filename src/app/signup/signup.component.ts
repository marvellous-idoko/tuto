import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document,  private r:Router, private fb:UntypedFormBuilder,
  private socialAuthService: SocialAuthService,
  private s:ZeetaService) { }
  socialUser!:any;

  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   if (user) {
    //     this.show()

    //     // this.s.register(this.socialUser).subscribe((r:any) => {
    //     //   if(r.code == 0){
    //     //     localStorage.setItem('tutoUser',JSON.stringify(r['user']))
    //     //     this.r.navigateByUrl('home')
    //     //   }else if(r.code == 1){
    //     //     localStorage.setItem('tutoUser',JSON.stringify(r['user']))
    //     //     this.r.navigateByUrl('home')
    //     //   }
    //     // });

    //   }

    // });
  }
  loader = false
  kil=this.fb.group({
    name:[null,Validators.required],
    email:[null,Validators.required],
    pwd:[null,Validators.required],
    cpwd:[null,Validators.required],
    // contact:[null,Validators.required],
  })
  genres = ['Romance',"ShortStories","Parenting",'Poetry',"Historical","Teens","Adventure","Feminine","Biographies"]
  
  register(){
    this.loader = true
    this.kil.value['genres'] = this.clickedGenres
    if(!this.socialUser){

    if(this.kil.get('pwd')?.value != this.kil.get('cpwd')?.value){
      this.s.ancerText='password mismatch'
      this.r.navigateByUrl('announcer')
    }else{
      this.s.register(this.kil.value).subscribe((r:{[key:string]:any})=>{
        this.loader = false  
        if(r['code']==0){
          console.log(r['msg'])
          this.s.ancerText=r['msg']
          this.r.navigateByUrl('announcer')
  
        }else{
          alert('success')
          this.r.navigateByUrl('login')
        }
      })
    }
  }else{
    this.socialUser['genres'] = this.clickedGenres
    this.s.register(this.socialUser).subscribe((r:{[key:string]:any})=>{
      this.loader = false  
      if(r['code']==0){
        console.log(r['msg'])
        this.s.ancerText=r['msg']
        this.r.navigateByUrl('announcer')

      }else{
        alert('success')
        this.r.navigateByUrl('login')
      }
    })
  }

  }

  clickedGenres: string[] = []
  
  addGenres(genre: string) {
    if (this.clickedGenres.includes(genre)) {
      let y = this.clickedGenres.indexOf(genre)
      this.clickedGenres.splice(y, 1)
    }else{
      this.clickedGenres.push(genre)
    }
  }
show(){
 this.d.getElementById('el')?.classList.add('lki')
 this.d.getElementById('el1')?.classList.add('lx')
}
}
