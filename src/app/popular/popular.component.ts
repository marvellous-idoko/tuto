import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DOCUMENT, Location } from '@angular/common';
import { btmSheet } from './btmsheet';
import { ZeetaService } from '../zeeta.service';
import { Router } from '@angular/router';
// import {  } from "../";

// const ft:{[key:string]:any} =  ''

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private s: ZeetaService, private r:Router, private _bottomSheet: MatBottomSheet) { }
  counter = 0
  idOfBksFrVw: string[] = []
  ngOnInit(): void {
    this.contents = this.s.eng['bksPop']
    this.currCont = this.contents[this.counter]
    this.s.crrtBook = this.contents[this.counter]
    this.addCss()
    this.tr = "url(" + this.currCont['bookArtSm'] + ")"
    this.autr = this.currCont['authorPhoto']
    this.s.listbooks('bksPop', true).
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
          this.s.getRes(this.contents[index]['author'], 'author', 'name')
            .subscribe((r: { [key: string]: any }) => this.contents[index]['authorNm'] = r['msg'])
          this.s.getRes(this.contents[index]['author'], 'author', 'photo')
            .subscribe((r: { [key: string]: any }) => this.contents[index]['authorPhoto'] = r['msg'])
        }
        this.currCont = this.contents[this.counter]
      })

  }
  mov(){
    this.r.navigateByUrl('readBook')
  }
  openBottomSheet(): void {
    this._bottomSheet.open(btmSheet);
  }
  currCont: any;
  contents: any[] = []
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
    // this.d.getElementById('bookArtSm')?.style.backgroundColor != "#a12"
    // this.d.getElementById('bookArtSm')?.style.backgroundImage != this.currCont['bookArtSm']

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
    this.s.popCrtVwd = this.contents[this.counter]
    // this.d.getElementById('bookArtSm')?.style.backgroundColor != "black"
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
    this.s.popCrtVwd = this.contents[this.counter]
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