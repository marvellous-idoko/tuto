import { Component, OnInit } from '@angular/core';
import { ZeetaService } from '../zeeta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(public s: ZeetaService, private r: Router) { }
  books: any
  bksForU: any
  bksPop: any
  bksMstRtd: any
  bksTrnd: any
  bksCrtRdng: any
  favAut: any
  loader = true
  // eng : {[key:string]:any} = {}
  
  ngOnInit(): void {
    this.s.kolkd()
    if (!localStorage.getItem('tutoUser')) {
      this.r.navigateByUrl('login')
    }else{
      if( this.isEmpty(this.s.eng)){
        this.getBksForU()
      }else{
        this.loader = false
      }
    }
  }
   isEmpty(obj:{}) {
    return Object.keys(obj).length === 0;
}
  getBksForU() {
    this.s.listbookys('bksforyou').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['bksForU']  = r
        console.log(r)
        for (let index = 0; index < this.s.eng['bksForU'].length; index++) {
          this.s.getRes(this.s.eng['bksForU'][index]['author'], 'author', 'name')
            .subscribe((r: { [key: string]: any }) => this.s.eng['bksForU'][index]['authorNm'] = r['msg'])
        }
        this.getBksPop()
      this.loader = false
      })
  }
  getBksPop() {
    this.s.listbookys('popular').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['bksPop'] = r
        for (let index = 0; index < this.s.eng['bksPop'].length; index++) {
          this.s.getRes(this.s.eng['bksPop'][index]['author'], 'author', 'name')
            .subscribe((r: { [key: string]: any }) => this.s.eng['bksPop'][index]['authorNm'] = r['msg'])
        }
        this.getBksMstRtd()
      })
  }
  getBksMstRtd() {
    this.s.listbookys('mostRated').
      subscribe((r: { [key: string]: any }) => {

        this.s.eng['bksMstRtd'] = r
        if(this.s.eng['bksMstRtd'].length != 0){
          for (let index = 0; index < this.s.eng['bksMstRtd'].length; index++) {
           if(this.s.eng['bksMstRtd'][index] == null){
            index++
          }else{
                        this.s.getRes(this.s.eng['bksMstRtd'][index]['author'], 'author', 'name')
                          .subscribe((r: { [key: string]: any }) => this.s.eng['bksMstRtd'][index]['authorNm'] = r['msg'])
                      }
          }

        }
        this.trending()
      })
  }
  trending() {
    this.s.listbookys('trending').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['bksTrnd'] = r
        if(this.s.eng['bksTrnd'].length != 0){
        
          for (let index = 0; index < this.s.eng['bksTrnd'].length; index++) {
            this.s.getRes(this.s.eng['bksTrnd'][index]['author'], 'author', 'name')
              .subscribe((r: { [key: string]: any }) => this.s.eng['bksTrnd'][index]['authorNm'] = r['msg'])
          }
        }
        this.crtRdng()
      })
  }
  crtRdng() {
    this.s.listbookys('crtReadng').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['bksCrtRdng'] = r
        if(this.s.eng['bksCrtRdng'].length != 0){
          for (let index = 0; index < this.s.eng['bksCrtRdng'].length; index++) {
            this.s.getRes(this.s.eng['bksCrtRdng'][index]['author'], 'author', 'name')
              .subscribe((r: { [key: string]: any }) => this.s.eng['bksCrtRdng'][index]['authorNm'] = r['msg'])
          }
        }
  })
  this.favAutBks()
  }
  favAutBks() {
    console.log('lsgergergr')
    this.s.listbookys('favAut').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['favAut'] = r
        if(this.s.eng['favAut'].length != 0){
          for (let index = 0; index < this.s.eng['favAut'].length; index++) {
            this.s.getRes(this.s.eng['favAut'][index]['author'], 'author', 'name')
              .subscribe((r: { [key: string]: any }) => this.s.eng['favAut'][index]['authorNm'] = r['msg'])
          }
        }
      this.freeBooks();
      })
  }
  freeBooks() {
    this.s.listbookys('freeBooks').
      subscribe((r: { [key: string]: any }) => {
        this.s.eng['freeBooks'] = r
        if(this.s.eng['freeBooks'].length != 0){
          for (let index = 0; index < this.s.eng['freeBooks'].length; index++) {
            this.s.getRes(this.s.eng['freeBooks'][index]['author'], 'author', 'name')
              .subscribe((r: { [key: string]: any }) => this.s.eng['freeBooks'][index]['authorNm'] = r['msg'])
          }
        }
      // console.log(this.s.eng)
      })
  }

  getRs(bk: string) {
    this.s.getRes(bk, 'author', 'name').subscribe(r => console.log(r))
  }

  goto(s: string) {
    this.r.navigateByUrl('aboutBook/' + s)
  }
}
