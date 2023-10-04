import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZeetaService } from '../zeeta.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  constructor(private l: Location,private s:ZeetaService, private r:Router) { }

  ngOnInit(): void {
    this.getBks()
  }
  movback() {
    this.l.back()
  }
idx :any
  selectedIndex: number = 1;
  public tabs = [
    {id:1,lbl:'Romance'}, 
    {id:2,lbl:'Adventure'}, 
    {id:3,lbl:'Teens'},
    {id:4,lbl:'Feminine'},
    {id:6,lbl:'Historical'},
    {id:7,lbl:'ShortStories'},
    {id:8,lbl:'Poetry'},
    {id:9,lbl:'Parenting'},
  ];
  private tabsCount = this.tabs.length;

  selectChange(): void{
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' ,LEFTY: 'touchstart', RIGHTY: 'touchend' };

  // Action triggered when user swipes
  swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  // console.log("swipe");
  //   console.log("number",selectedIndex);
  //   console.log("action",action);
    // Out of range
    if (this.selectedIndex < 0/* starter point as 1 */ || this.selectedIndex > this.tabsCount/* here it is */ ) return;

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT ) {
      const isLast = this.selectedIndex === this.tabsCount;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      // console.log("Swipe right - INDEX: " + this.selectedIndex);
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0 /* starter point as 1 */;
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      // console.log("Swipe left - INDEX: " + this.selectedIndex);
    }
    // if (action === this.SWIPE_ACTION.LEFT) {
    //   const isLast = this.selectedIndex === this.tabsCount;
    //   this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
    //   console.log("Swipe right - INDEX: " + this.selectedIndex);
    // }

    // Swipe right, previous tab
    // if (action === this.SWIPE_ACTION.RIGHT) {
    //   const isFirst = this.selectedIndex === 0 /* starter point as 1 */;
    //   this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
    //   console.log("Swipe left - INDEX: " + this.selectedIndex);
    // }
   

  }
  arr :{[key:string]:any} = {}
  genres = ['Romance','Feminine','Teens','Adventure','Parenting','Historical','ShortStories','Poetry' ]
  Romance :any[]=[];Parenting :any[]=[];Feminine:any[]=[];Teens:any[]=[];Adventure:any[]=[];Historical:any[]=[];ShortStories:any[]=[];Poetry:any[]=[];
  bn:any
  loader = false
  getBks(){
    this.loader = true
    for (let index:any = 0; index < this.genres.length; index++) {
      this.s.listbooks('genres',true,this.genres[index])
      .subscribe((r:any)=>{
        if (this.genres[index] == 'Romance'){
          this.Romance = [...r]
          this.arr['Romance']=this.Romance
        }else if(this.genres[index] == 'Feminine'){
          this.Feminine=[...r]
          this.arr['Feminine']=this.Feminine

        }else if(this.genres[index] == 'Teens'){
          this.Teens = [...r]
          this.arr['Teens']=this.Teens

        }
        else if(this.genres[index] == 'Adventure'){
          this.Adventure= [...r]
          this.arr['Adventure']=this.Adventure
          
        }else if(this.genres[index] == 'Historical'){
          this.Historical= [...r]
          this.arr['Historical']=this.Historical
          
        }else if(this.genres[index] == 'ShortStories'){
          this.ShortStories = [...r]
          this.arr['ShortStories']=this.ShortStories
          
        }else if(this.genres[index] == 'Poetry'){
          this.Poetry = [...r]
          this.arr['Poetry']=this.Poetry

        }
        else if(this.genres[index] == 'Parenting'){
          this.Parenting = [...r]
          this.arr['Parenting']=this.Parenting

        }

      })
    }
    this.loader = false
    // this.s.listbooks('genres',true,)
  }
  
  goto(s:string){
    this.r.navigateByUrl('aboutBook/'+s)
  }

}
