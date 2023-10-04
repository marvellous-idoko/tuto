
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DOCUMENT, Location } from '@angular/common';
import { btmSheetq } from './btmsheet';
import { ZeetaService } from '../zeeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-author',
  templateUrl: './fav-author.component.html',
  styleUrls: ['./fav-author.component.css',"../popular/popular.component.css"]
})
export class FavAuthorComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private _bottomSheet:MatBottomSheet, private r:Router, private s:ZeetaService) { }
  counter = 0
  idOfBksFrVw: string[] = []
  ngOnInit(): void {
    this.contents = this.s.eng['favAut']
    this.currCont = this.contents[this.counter]
    this.s.crrtBook = this.contents[this.counter]
    this.addCss()
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
    this.autr = this.currCont['authorPhoto']
    this.s.listbooks('favAut', true).
      subscribe((r: any) => {
        for (let index = 0; index < this.contents.length; index++) {
          this.idOfBksFrVw.push(this.contents[index]['_id']);
        }

        for (let i = 0; i < r.length; i++) {
          if (!this.idOfBksFrVw.includes(r[i]['_id'])) {
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
        .subscribe((r:{[key:string]:any})=>this.contents[index]['authorNm'] = r['msg']) 
        this.s.getRes(this.contents[index]['author'],'author','photo')
        .subscribe((r:{[key:string]:any})=>this.contents[index]['authorPhoto'] = r['msg']) 
     }
    })
 
  }
  openBottomSheet(): void {
    console.log('niknik')
    this._bottomSheet.open(btmSheetq);
  }

  mov(){
    this.r.navigateByUrl('readBook')
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
    this.s.trndCrtVwd = this.contents[this.counter]
    this.d.getElementById('bookArtSm')?.style.backgroundColor != "black"
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
    this.autr = this.currCont['authorPhoto']
  this.s.crrtBook = this.contents[this.counter]

  }
  tr: string = "";
  autr: string = "";
  changeCont() {
    if(this.liner){
      this.liner = false
    }
    if (this.counter == this.contents.length) this.counter = 0
    this.currCont = this.contents[this.counter]
    this.s.trndCrtVwd = this.contents[this.counter]
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
    this.autr = this.currCont['authorPhoto']
  this.s.crrtBook = this.contents[this.counter]

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