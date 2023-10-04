import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document,) { }

  ngOnInit(): void {
    this.d.getElementById('btn')?.click()
  }

}
