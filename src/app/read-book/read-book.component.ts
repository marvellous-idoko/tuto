import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
// import {default as json} from '../../assets/sample.json';
import { DOCUMENT, Location } from '@angular/common';
import { ZeetaService } from '../zeeta.service';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var TTSFxn:string
@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css'],
})
export class ReadBookComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private tstr: ToastrService,
    @Inject(DOCUMENT) private d: Document,
    private fb: UntypedFormBuilder,
    private r: Router,
    private l: Location,
    public s: ZeetaService
  ) {
    this.synth = (window.speechSynthesis)? window.speechSynthesis:undefined;
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  book: any;
  ki: any;
  title: string = '';
  loader = false;
  synth: any;
  el = this.d.getElementById('4')!;
  currentPosition = window.pageYOffset;
  usr = JSON.parse(localStorage.getItem('tutoUser')!);
  oli = 'chapter2';
  trkr = false;
  kie = 0;
  bookRead = this.usr['clt'];
  // @HostListener('window:scroll', ['$event.target'])
  // onElementScroll($event: any) {
  //   let scroll = $event.scrollingElement.scrollTop;
  //   let jkh: any = this.d.getElementById(this.oli)?.offsetTop;
  //   if (parseInt(scroll) > parseInt(jkh)) {
  //     if (this.bookRead) {
  //       if (typeof this.bookRead == 'string') {
  //         this.bookRead = JSON.parse(this.bookRead);
  //       }
  //       if (this.s.crrtBook.bookId in this.bookRead) {
  //         if (
  //           parseInt(this.oli.slice(7)) >
  //           parseInt(this.bookRead[this.s.crrtBook.bookId])
  //         ) {
  //           if (this.trkr) {
  //           } else {
  //             this.trkr = true;
  //             this.removeCoin(parseInt(this.oli.slice(7)));
  //           }
  //         } else {
  //         }
  //       } else {
  //         if (!this.trkr) {
  //           console.log('[mk');
  //           this.trkr = true;
  //           this.removeCoin(parseInt(this.oli.slice(7)));
  //         } else {
  //         }
  //       }
  //     } else {
  //       if (!this.trkr) {
  //         this.removeCoin(parseInt(this.oli.slice(7)));
  //         this.trkr = true;
  //       } else {
  //       }
  //     }
  //   }
  // }

  bak() {
    this.r.navigateByUrl('coinshp');
  }
  tools = false;
  hum() {
    this.r.navigateByUrl('home/homeView');
  }
  kilw = 0;
  srt = '';
  okil() {
    console.log(";lkj")
    this.s.chkBkAvail().subscribe((r: any) => {
      console.log(r)
      if (r['msg'] == 'avail') {
        this.oli = 'chapter' + parseInt(1 + r['kile']);
        // let jkh: any = this.d.getElementById(this.oli)?.offsetTop;
        this.srt = 'chapter' + r['kile'];
        this.d.getElementById(this.srt)?.scrollTo();
        this.lastRead = true;
      }
    });
  }
  fntsz: any = 10;
  lastRead = false;
  removeCoin(chptr?: number) {
    let hu = '';
    this.s.rmvCoin(chptr).subscribe((r: any) => {
      if (r['msg'] == 'done') {
        localStorage.setItem('tutoUser', JSON.stringify(r['user']));
        let d = JSON.parse(r['user']['clt']);
        this.usr = JSON.parse(localStorage.getItem('tutoUser')!);
        this.trkr = false;
        if (this.s.crrtBook['bookId'] in d) {
          this.oli = 'chapter' + parseInt(d[this.s.crrtBook['bookId']] + 1);
        }
        //  }
      } else {
        // this.adShosw();
      }
    });
  }
  kkh() {
    setTimeout(() => {
      this.s.incrNoReads().subscribe((r) => {
        console.log(r);
      });
    }, 300000);
    // }, 1000);
  }
  po = this.fb.group({
    rng: ['10'],
  });

  ss(e: any) {
    this.fntsz = e.value;
    console.log(this.po.get('rng')?.value);
    let i = <HTMLInputElement>this.d.getElementById('vol');
  }
  dq = false;
  yu = 0;
  vces:any[] = ["Michah"];
  seletedVcs: any;

  ngOnInit(): void {
    if(this.synth){

    this.synth.onvoiceschanged = () => {
      this.vces = this.synth.getVoices();
      // Use the voices list here

      this.tstr.error(typeof this.synth);
      this.tstr.error(typeof this.vces);
    };
  }

    //  this.readAloud()
    this.okil();
    this.yu = this.s.crrtBook.chapters?.length ?? 0;
    this.kkh();
    this.title = this.s.crrtBook['title'];
    // this.showAd();
    if (!this.s.crrtBook.chapters) {
      this.s.getBook(this.s.crrtBook.bookId).subscribe((gre) => {
        this.s.crrtBook = gre;
        this.yu = this.s.crrtBook.chapters?.length ?? 0;
      });
    }
  }
  vcsc: any;

  ty = '20';
  fontStyles = [
    {
      name: 'Open Sans',
      value: "'Open Sans', sans-serif",
    },
    {
      name: 'Georgia',
      value: "'Georgia', sans-serif",
    },
    {
      name: 'Times New Roman',
      value: "'Times New Roman', sans-serif",
    },
    {
      name: 'Helvetica',
      value: "'Helvetica', sans-serif",
    },
    {
      name: 'Arial',
      value: "'Arial', sans-serif",
    },
    {
      name: 'Lato',
      value: "'Lato', sans-serif",
    },
    {
      name: 'Verdana',
      value: "'Verdana', sans-serif",
    },
    {
      name: 'Montserrat',
      value: '"Montserrat", sans-serif',
    },
  ];
  paraFont = this.fontStyles[0].value;
  adShosw() {
    this.d.getElementById('chapk')?.classList.remove('hide');
    this.d.getElementById('chapk')?.classList.add('show');
  }

  adShow() {
    this.d.getElementById('ad')?.classList.remove('hide');
    this.d.getElementById('ad')?.classList.add('show');
  }
  rmvAd() {
    this.d.getElementById('ad')?.classList.remove('show');
    this.d.getElementById('ad')?.classList.add('hide');
  }

  showAd() {
    setInterval(() => {
      this.d.getElementById('ad')?.classList.remove('hide');
      this.d.getElementById('ad')?.classList.add('show');
    }, 1200000);
  }
  // this.vces
  readAloud(chapter: number) {
    try {
      if(this.synth == '' || this.synth == undefined || this.synth == null){
        TTSFxn = ''
      document.getElementById('showAd')?.click()

        TTSFxn = this.s.crrtBook['chapters'][chapter]['chapter']['chp'].replace('*', '')
      document.getElementById('showAd')?.click()

     }
     else{ 
      this.synth.cancel();
      let utterThis =  new SpeechSynthesisUtterance(this.s.crrtBook['chapters'][chapter]['chapter']['chp'].replace('*', '')) 
      utterThis.voice = this.seletedVcs;
      this.synth.speak(utterThis);
    }
    } catch (error) {
      console.log(error);
    }
  }
  ngOnDestroy() {
    if(this.synth){
      this.synth.cancel();
    }else{
      TTSFxn = ''
      document.getElementById('showAd')?.click()
    }
  }
  formatLabel(value: number): string {
    // if (value >= 1000) {
    //   return Math.round(value / 1000) + 'k';
    // }

    return `${value}PX`;
  }
  showAudBtn = false;
  selectVoice(index: number) {
    this.seletedVcs = this.vces[index];
    this.showAudBtn = true;
  }
  payWithCoin(price: string) {
    if (
      parseInt(JSON.parse(localStorage.getItem('tutoUser')!).coins) <
      parseInt(price)
    ) {
      this.tstr.info(
        'Oops your coins are not enough, click the get coins button'
      );
      console.log('Oops your coins are not enough, click the get coins button');
      // return;
    }
    this.removeCoin(parseInt(price));
  }
  hideNotPaid(chapter: number, nextTobePaid: string) {
    return chapter >= parseInt(nextTobePaid);
  }
  scrollToView(destination: string, n?: boolean) {
    if (n) {
      this.lastRead = !this.lastRead;
    }
    this.d.getElementById(destination)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
