

import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DOCUMENT, Location } from '@angular/common';
import { btmSheete } from './btmsheet';
import { ZeetaService } from '../zeeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bksforyou',
  templateUrl: './bksforyou.component.html',
  styleUrls: ['./bksforyou.component.css',"../popular/popular.component.css"]
})
export class BksforyouComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private r:Router, private _bottomSheet:MatBottomSheet, private s:ZeetaService) { }
  counter = 0
  idOfBksFrVw :string[] = []
  ngOnInit(): void {
   this.contents = this.s.eng['bksForU']
  this.currCont = this.contents[this.counter]
  this.s.crrtBook = this.contents[this.counter]
  this.addCss()
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
    this.autr = this.currCont['authorPhoto']
    this.s.listbooks('bksforyou',true).
    subscribe((r:any)=>
    {
      
      for (let index = 0; index < this.contents.length; index++) {
        this.idOfBksFrVw.push(this.contents[index]['_id']);
      }

        for (let i = 0; i < r.length; i++) {
          if(!this.idOfBksFrVw.includes(r[i]['_id'])){
            this.contents.push(r[i])
          }
          else{
            for (let j = 0; j < this.contents.length; j++) {
             if(this.contents[j]['_id'] == r[i]['_id']){
              this.contents[j] = r[i]
             }
            }
          }
        }
     
      for (let index = 0; index < this.contents.length; index++) {
        this.s.getRes(this.contents[index]['author'],'author','name')
        .subscribe((r:{[key:string]:any})=>{this.contents[index]['authorNm'] = r['msg']}) 
        this.s.getRes(this.contents[index]['author'],'author','photo')
        .subscribe((r:{[key:string]:any})=>this.contents[index]['authorPhoto'] = r['msg']) 
     }
    })

  }
    mov(){
      this.r.navigateByUrl('readBook')
    }
  openBottomSheet(): void {
    console.log('niknik')
    this._bottomSheet.open(btmSheete);
  }
  currCont: any; 
  
  contents : any[] = []
  addCss() {

    this.d.getElementById('slider')?.classList.remove('panelAnime')
    this.d.getElementById('slider')?.classList.remove('panelAnimeDwn')
    setTimeout(() => {
      this.d.getElementById('slider')?.classList.add('panelAnime')
    }, 20);

  }
  addCssDwn() {

    this.d.getElementById('slider')?.classList.remove('panelAnime')
    this.d.getElementById('slider')?.classList.remove('panelAnimeDwn')

    setTimeout(() => {
      this.d.getElementById('slider')?.classList.add('panelAnimeDwn')
    }, 20);

  }
  liner = true
  changeContDwn() {
    if(this.liner){
      this.liner = false
    }
    if (this.counter == 0) this.counter = this.contents.length
    this.currCont = this.contents[this.counter]
    this.s.bksForUCrtVwd = this.contents[this.counter]
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
  this.s.crrtBook = this.contents[this.counter]
  this.autr = this.currCont['authorPhoto']
  }
  tr: string = "";
  autr: string = "";
  changeCont() {
    if(this.liner){
      this.liner = false
    }
    if (this.counter == this.contents.length) this.counter = 0
    this.currCont = this.contents[this.counter]
    this.s.bksForUCrtVwd = this.contents[this.counter]
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
  this.s.crrtBook = this.contents[this.counter]
  this.autr = this.currCont['authorPhoto']
  }

  swipeDwn(t: any) {
    this.counter--
    this.changeContDwn()
    this.addCssDwn()
    this.changeContDwn()
  }
  swipeUpp(t: any) {
    this.counter++
    this.addCss()
    this.changeCont()

  }
}