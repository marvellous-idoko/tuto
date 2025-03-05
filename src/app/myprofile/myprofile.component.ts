import { Component, OnInit } from '@angular/core';
import { ZeetaService } from '../zeeta.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(public s:ZeetaService,private l:Location,private r:Router) { }
user:{[key:string]:any}={'pop':"sw"}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('tutoUser')!)
    this.imgSrc =  (this.user['photoUrl'])? this.user['photoUrl'] : './logo.jpg'
    document.getElementsByClassName('avatar')[0].setAttribute('src',this.user['photoUrl'])
    // console.log(this.user)
  }
goto(s:string){
  this.r.navigateByUrl(s)
}
imgSrc = './logo.jpg'
  movback(){
    this.l.back()
  }
  yu = false
  addGenres() {
    this.yu = !this.yu
    let ui = JSON.parse(localStorage.getItem('tutoUser')!)
    ui['black'] = this.yu
    console.log(ui)
    localStorage.setItem('tutoUser',JSON.stringify(ui))
    this.s.jko(this.yu)
  }
  logout(){
    localStorage.clear()
    this.r.navigateByUrl('login')
  }
}
