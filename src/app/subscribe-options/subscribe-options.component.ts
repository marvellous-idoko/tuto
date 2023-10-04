import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';

@Component({
  selector: 'app-subscribe-options',
  templateUrl: './subscribe-options.component.html',
  styleUrls: ['./subscribe-options.component.css']
})
export class SubscribeOptionsComponent implements OnInit {

  constructor(public s:ZeetaService, private r:Router) { }
  loader=false
  ngOnInit(): void {
  }
  choose(method:string){
    this.loader = true
    if(method == 'coin'){
      if(parseInt (this.s.user['coins']) > parseInt(this.s.currInterfaceBoook['price']) ){
        this.loader = false
        alert('success')
      }else{
        this.loader = false
        this.s.ancerText = 'insufficient coins, buy more coins to enjoy your favourite book'    
        this.r.navigateByUrl('announcer')    
      }
    }else{
      this.r.navigateByUrl('readBook')    
      
    }
  }
}
