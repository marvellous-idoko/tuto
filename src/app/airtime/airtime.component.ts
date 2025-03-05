import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.css']
})
export class AirtimeComponent implements OnInit {

  constructor(private fb:UntypedFormBuilder) { }
 
  ngOnInit(): void {
  }
  kil=this.fb.group({
    PhNo:[null,Validators.required],
    amount:[null,Validators.required],
  })
  loader = false
  collectInfo(){

    console.log(this.kil.value)
    this.loader=true
  }
  verifyInfo(){
    if(this.kil.get('PhNo')?.value.length != 11){
      alert('incorrect Phone number')
    }
  }
}
