import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css']
})
export class TrendingCardComponent implements OnInit {
  @Input() data: any;

  constructor() { }
  ngOnInit(): void { }
}
