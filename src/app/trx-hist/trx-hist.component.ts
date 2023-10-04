import { Component, OnInit } from '@angular/core';
import { ZeetaService } from '../zeeta.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trx-hist',
  templateUrl: './trx-hist.component.html',
  styleUrls: ['./trx-hist.component.css']
})
export class TrxHistComponent implements OnInit {

  constructor(private s:ZeetaService,private l:Location) { }
  trxns=[]
  ngOnInit(): void {
    this.s.trxnHis()
    .subscribe((r:any)=>{
      this.trxns = r['msg']
      console.log(r)
    })
  }

  movback(){
    this.l.back()
  }
}
