import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnergyComponent } from './energy/energy.component';
import { DataComponent } from './data/data.component';
import { CableComponent } from './cable/cable.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AnnouncerComponent } from './announcer/announcer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { AboutBookComponent } from './about-book/about-book.component';
import { SubscribeOptionsComponent } from './subscribe-options/subscribe-options.component';
import { BksforyouComponent } from './bksforyou/bksforyou.component';
import { CoinShopComponent } from './coin-shop/coin-shop.component';
import { FavAuthorComponent } from './fav-author/fav-author.component';
import { MstRtdComponent } from './mst-rtd/mst-rtd.component';
import { SearchComponent } from './search/search.component';
import { TrxHistComponent } from './trx-hist/trx-hist.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent,children:[
    { path: '', redirectTo: 'homeView', pathMatch: 'full' },
    {path:'homeView', component:HomeViewComponent},
    {path:'popular', component:PopularComponent},
    {path:'trending', component:TrendingComponent},
  ]},
  {path:'trending', component:TrendingComponent},
  {path:'downloader', component:LoaderComponent},
    {path:'favAuthor', component:FavAuthorComponent},
    {path:'mstRtd', component:MstRtdComponent},
  {path:'readBook', component:ReadBookComponent, data: { animation: 'rdbk' }},
  {path:'popular', component:PopularComponent},
  {path:'bksForU', component:BksforyouComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'energy', component:EnergyComponent},
  {path:'cable',component:CableComponent},
  {path:'data',component:DataComponent},
  {path:'airtime',component:AirtimeComponent},
  {path:'announcer',component:AnnouncerComponent},
  {path:'genres',component:MydetailsComponent , data: { animation: 'gres' }},
  {path:'sub-option',component:SubscribeOptionsComponent},
  {path:'aboutBook/:id',component:AboutBookComponent, data: { animation: 'abtBk' }},
  {path:'myprofile',component:MyprofileComponent , data: { animation: 'pro' }},
  {path:'search',component:SearchComponent , data: { animation: 'srch' }},
  {path:'trxHist',component:TrxHistComponent},
  {path:'coinshp',component:CoinShopComponent}
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})


export class AppRoutingModule { }
