import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ZeetaService } from '../zeeta.service';

@Component({
    selector: 'btmsheet',
    templateUrl: './btmsheet.html',
    styleUrls: ['../popular/popular.component.css']
  })  

  export class btmSheetq implements OnInit{
    constructor(private _bottomSheetRef: MatBottomSheetRef<btmSheetq>,public s:ZeetaService, private fb:FormBuilder){}

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
      }
      ngOnInit(): void {
        this.getCmts()
      }
      ys : any[] =[]
      cmt = this.fb.group({
        cmmt: [''],
      })
  
      checkForComments(){
        setInterval(() => {
          this.s.checkForNewComments(this.s.crrtBook['bookId']).subscribe((r:{[keys:string]:any})=>{
            if(this.ys.length != parseInt(r['msg']))this.getCmts()
          })
        }, 2000);
      }
      getCmts(){
        this.s.getCmts(this.s.crrtBook['bookId']).subscribe((r:{[keys:string]:any})=>{
         this.ys=[...r['msg']]
         for (let index = 0; index < this.ys.length; index++) {
          //  this.books[index]['author'] ;
           this.s.getRes(this.ys[index]['user'],'user','name')
           .subscribe((r:{[key:string]:any})=>this.ys[index]['name'] = r['msg']) 
           this.s.getRes(this.ys[index]['user'],'user','photo')
           .subscribe((r:{[key:string]:any})=>this.ys[index]['photo'] = r['msg']) 
        }
        })
        // this.checkForComments()
      }
      cmnt(){
        this.ys.push({ name:this.s.user['name'], value:(this.cmt.value)['cmmt'].trim()})
        this.s.cmt(this.s.crrtBook['bookId'],(this.cmt.value)['cmmt']).
        subscribe((r:{[keys:string]:any})=>{
          if(r['code'] == 0)
          {
            this.ys.pop()
            alert('unable to comment')
          }
        })
        this.cmt.reset()
      }
  }