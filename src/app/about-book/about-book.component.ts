import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from "@angular/router";
import { ZeetaService } from '../zeeta.service';
import { btmSheetf } from './btmsheet';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.css']
})
export class AboutBookComponent implements OnInit {

  constructor(private l: Location,private act:ActivatedRoute, private _bottomSheet:MatBottomSheet,private s:ZeetaService) { }
  book:any;tr=''
  ngOnInit(): void {
   this.s.getBook(this.act.snapshot.params['id'])
   .subscribe(gre=>{
      this.book = gre
      console.log(this.book)
      this.s.crrtBook = gre
      this.tr="url(" + this.book['bookArtSm'] + ")"
    this.s.currInterfaceBoook = gre
    this.s.getRes(this.book['author'],'author','name')
    .subscribe((r:{[key:string]:any})=>this.book['authorNm'] = r['msg']) 
    this.s.getRes(this.book['author'],'author','photo')
    .subscribe((r:{[key:string]:any})=>this.book['authorPic'] = r['msg']) 
    
  })
  }
  movback() {
    this.l.back()
  }
  checkPrice(price:string){
    if(parseInt(price) > 0){
      return true;
    }else{
      return false;
    }
  }
  openBottomSheet(): void {
    this._bottomSheet.open(btmSheetf);
  }

}
