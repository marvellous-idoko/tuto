import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaystackOptions } from 'angular4-paystack';
import { ZeetaService } from '../zeeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-shop',
  templateUrl: './coin-shop.component.html',
  styleUrls: ['./coin-shop.component.css']
})
export class CoinShopComponent implements OnInit {

  constructor(private l: Location,public s: ZeetaService, private r:Router) { }
  options: PaystackOptions = {
    amount: 3000000,
    email: `${this.s.user['email']}`,
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }
  ref:string = `TOYO${Math.ceil(Math.random() * 10e10)}`
  kk(){

    this.ref = `TOYO${Math.ceil(Math.random() * 10e10)}`
  }

  ngOnInit(): void {
  }
  movback() {
    this.l.back()
  }

  coinList:any = {
    a: {
      price: 1500,
      value: 30
    },
    b: {
      price: 2000,
      value: 92
    },
    c: {
      price: 1500,
      value: 180
    },
  d: {
      price: 2000,
      value: 286
    },
    e: {
      price: 1500,
      value: 551
    },
  }
  getCoin(type: string) {

  }
  paymentInit(){
    this.kk()
  }
  paymentCancel(){
    this.s.ancerText = 'you have canceled the payment, please try again'
    this.r.navigateByUrl('announcer')
  }
  ny:any
    paymentDone(we:any,ref:string,amt:string){
    this.s.addCoin(this.ny['value'],ref,amt)
    .subscribe((r: { [key: string]: any })=>{
      localStorage.setItem('tutoUser',JSON.stringify(r['u']))
      this.s.ancerText = r['msg']
      this.r.navigateByUrl('announcer')
    })
  }
  loader = false
fg(nk:string){
  this.loader = true  
  this.ny = this.coinList[nk]

}
}
