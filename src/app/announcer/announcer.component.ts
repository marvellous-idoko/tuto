import { Component, OnInit } from '@angular/core';
import { ZeetaService } from '../zeeta.service';
import { DOCUMENT, Location } from '@angular/common';

@Component({
  selector: 'app-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.css']
})
export class AnnouncerComponent implements OnInit {

  constructor(public s:ZeetaService,private l:Location) { }
  
  ngOnInit(): void {
  }
  moveBack(){
    this.l.back()
  }
  
  movBack(){
    this.l.back()
  }

}
