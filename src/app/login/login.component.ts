import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r: Router, private fb: FormBuilder, private s: ZeetaService) { }

  ngOnInit(): void {
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
          console.log(r)
        }
      })
  }
}
