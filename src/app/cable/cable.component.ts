import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cable',
  templateUrl: './cable.component.html',
  styleUrls: ['./cable.component.css']
})
export class CableComponent implements OnInit {

 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  kil=this.fb.group({
    SmrtCrdNo:[null,Validators.required],
    vendor:[null,Validators.required],
    amount:[null,Validators.required],
  })

}
