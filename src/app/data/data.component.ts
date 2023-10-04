import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list :any = {
    '9mobile':{
      '1':{
        price:300,
        qty:'1G'
      },
      '2':{
        price:500,
        qty:'2G'
      },
      '3':{
        price:1000,
        qty:'4.5G'
      },
      '4':{
        price:1500,
        qty:'6G'
      },
    },
    'mtn':{
      '1':{
        price:300,
        qty:'1G'
      },
      '2':{
        price:500,
        qty:'2G'
      },
      '3':{
        price:1000,
        qty:'4.5G'
      },
      '4':{
        price:1500,
        qty:'6G'
      },
    },
    'glo':{
      '1':{
        price:300,
        qty:'1G'
      },
      '2':{
        price:500,
        qty:'2G'
      },
      '3':{
        price:1000,
        qty:'4.5G'
      },
      '4':{
        price:1500,
        qty:'6G'
      },
    },
    'airtel':{
      '1':{
        price:300,
        qty:'1G'
      },
      '2':{
        price:500,
        qty:'2G'
      },
      '3':{
        price:1000,
        qty:'4.5G'
      },
      '4':{
        price:1500,
        qty:'6G'
      },
    },
  }
selected(network:string,type:string){
  console.log(network,this.list[network][type])
}
}
