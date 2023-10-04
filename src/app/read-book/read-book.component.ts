import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
// import {default as json} from '../../assets/sample.json';
import { DOCUMENT, Location } from '@angular/common';
import { ZeetaService } from '../zeeta.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private fb: FormBuilder,
    private r: Router,
    private l: Location,
    public s: ZeetaService) { }
  book: any; ki: any
  title: string = ''
  loader = false
  el = this.d.getElementById('4')!
  currentPosition = window.pageYOffset;
  usr = JSON.parse(localStorage.getItem("tutoUser")!)
  oli = 'chapter2'
  trkr = false
  kie=0
  bookRead = this.usr['clt'];
  
  @HostListener('window:scroll', ['$event.target'])
  onElementScroll($event: any) {
    let scroll = $event.scrollingElement.scrollTop;
    let jkh: any = this.d.getElementById(this.oli)?.offsetTop
    if (parseInt(scroll) > parseInt(jkh)) {
      if (this.bookRead) {
        if(typeof this.bookRead == 'string'){
          this.bookRead = JSON.parse(this.bookRead)
        }
        if ((this.s.crrtBook.bookId in this.bookRead)) {
  
          if(parseInt(this.oli.slice(7)) > parseInt(this.bookRead[this.s.crrtBook.bookId])){
        
            if (this.trkr) {
           
              
            }else{
              console.log('[mk')
              this.trkr = true
              this.removeCoin(parseInt(this.oli.slice(7)))
            }
          }else{

          }

          
        } else {
          if (!this.trkr) {
            console.log('[mk')
            this.trkr = true
            this.removeCoin(parseInt(this.oli.slice(7)))
            // this.usr = JSON.parse(localStorage.getItem("tutoUser")!)
            // this.trkr = true
          } else {
            console.log('[mk')
            
          }
        }


      } else {
        console.log("kjbjnjkn")
        if (!this.trkr) {
          console.log('[mk')
          this.removeCoin(parseInt(this.oli.slice(7)))
          this.trkr = true
          // this.usr = JSON.parse(localStorage.getItem("tutoUser")!)
        } else {

        }
      }
      // if ((this.s.crrtBook.bookId in JSON.parse(this.usr['clt']))) {
      //   console.log(parseInt(this.oli.slice(7)) > parseInt(JSON.parse(this.usr['clt'])[this.s.crrtBook.bookId]))
      //   console.log(parseInt(JSON.parse(this.usr['clt'])[this.s.crrtBook.bookId]))
      //   if (parseInt(this.oli.slice(7)) > parseInt(JSON.parse(this.usr['clt'])[this.s.crrtBook.bookId])) {
      //     if (!this.trkr) {

      //       console.log('[mk')
      //       this.removeCoin(parseInt(this.oli.slice(7)))
            
      //     } else {

      //     }
      //   } else {
      //     this.trkr = false
      //   }
      // } else {
        
      // }
    }
  }

  bak() {
    this.r.navigateByUrl('coinshp')
  }
  hum() {
    this.r.navigateByUrl('home/homeView')
  }
  kilw = 0
  srt = ''
  okil() {
    this.s.chkBkAvail().
      subscribe((r: any) => {
          if (r['msg'] == 'avail') {
          this.oli = 'chapter' + (parseInt(1 + r['kile']))
          console.log(this.oli)
          let jkh: any = this.d.getElementById(this.oli)?.offsetTop
          this.srt = 'chapter' + r['kile']
          this.d.getElementById(this.srt)?.scrollTo()
        }
      })

  }
  fntsz = 10

  removeCoin(chptr?: number) {
    let hu = ''
    this.s.rmvCoin(chptr)
      .subscribe((r: any) => {
        console.log(r)
        if (r['msg'] == 'done') {
          localStorage.setItem('tutoUser', JSON.stringify(r['user']))
          let d = JSON.parse(r['user']['clt'])
          this.usr = JSON.parse(localStorage.getItem("tutoUser")!)
          this.trkr = false
          console.log(this.trkr+"bjxsjx")
          if (this.s.crrtBook['bookId'] in d) {
            this.oli = 'chapter' + parseInt(d[this.s.crrtBook['bookId']] + 1)
          }
          //  }
        } else {
          console.log("no coin")
          this.adShosw()
        }
      })
  }
  kkh() {
    setTimeout(() => {
      this.s.incrNoReads()
        .subscribe(r => { console.log(r) })
    }, 300000);
    // }, 1000);
  }
  po = this.fb.group({
    rng: ['10']
  })

  ss(e: any) {
    this.fntsz = e.value
    console.log(this.po.get('rng')?.value)
    let i = <HTMLInputElement>this.d.getElementById('vol')
  }
  dq = false
  tglr() {
    this.dq = !this.dq
  }
  yu = 0
  ngOnInit(): void {
    console.log(this.s.crrtBook)
    this.okil()
    this.yu = this.s.crrtBook['chapters'].length
    this.kkh()
    this.title = this.s.crrtBook['title']
    this.showAd()
  }

  ty = '20'

  adShosw() {
    this.d.getElementById('chapk')?.classList.remove('hide')
    this.d.getElementById('chapk')?.classList.add('show')
  }

  adShow() {
    this.d.getElementById('ad')?.classList.remove('hide')
    this.d.getElementById('ad')?.classList.add('show')
  }
  rmvAd() {

    this.d.getElementById('ad')?.classList.remove('show')
    this.d.getElementById('ad')?.classList.add('hide')
  }

  showAd() {
    setInterval(() => {
      this.d.getElementById('ad')?.classList.remove('hide')
      this.d.getElementById('ad')?.classList.add('show')
    }, 1200000)
  }
}
