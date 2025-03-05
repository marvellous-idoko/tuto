import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ZeetaService } from '../zeeta.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb:UntypedFormBuilder,private l:Location, private s:ZeetaService) { }

  ngOnInit(): void {
  
  }
  tt = this.fb.group({
    srch:['']
  })
  list:any
  ki = true
  srch(){
    this.s.srch(this.tt.value['srch'])
    .subscribe((r:any)=>{
      if(r['msg'].length == 0){
        this.ki = true
      }else if(r['msg'].length > 0){
        this.list = r['msg']
        this.ki = false

      }else{
        alert('error')
      }
      })
  }
  
  movback(){
    this.l.back()
  }
  hg(){
  console.log()
  }

}
