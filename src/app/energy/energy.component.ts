import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  kil=this.fb.group({
    meterNo:[null,Validators.required],
    vendor:[null,Validators.required],
    amount:[null,Validators.required],
  })
  loader = false
  collectInfo(){

    console.log(this.kil.value)
    this.loader=true
  }
  verifyInfo(){
    console.log(this.kil.get('meterNo')?.value)
  }

}
