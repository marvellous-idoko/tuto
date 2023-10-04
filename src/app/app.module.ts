import { NgModule,Injectable,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PayoutComponent } from './payout/payout.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AirtimeComponent } from './airtime/airtime.component';
import { DataComponent } from './data/data.component';
import { EnergyComponent } from './energy/energy.component';
import { CableComponent } from './cable/cable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { NavComponent } from './home/nav/nav.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { GenresComponent } from './genres/genres.component';
import { FavAuthorComponent } from './fav-author/fav-author.component';
import { CrntReadingComponent } from './crnt-reading/crnt-reading.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSidenavModule} from '@angular/material/sidenav';
// @ts-ignore
import {MatChipsModule,MatChip} from '@angular/material/chips';
// @ts-ignore

import { Angular4PaystackModule } from 'angular4-paystack';

// @ts-ignore
import * as Hammer from 'hammerjs';
// const Hammer = require('hammerjs');

import {
HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} 
from '@angular/platform-browser';
import { btmSheetq } from './fav-author/btmsheet';
import { btmSheetw } from './mst-rtd/btmsheet';
import { btmSheete } from './bksforyou/btmsheet';
import { btmSheet } from './popular/btmsheet';
import { btmSheetf } from './about-book/btmsheet';
import { ReadBookComponent } from './read-book/read-book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AnnouncerComponent } from './announcer/announcer.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SearchComponent } from './search/search.component';
import { AboutBookComponent } from './about-book/about-book.component';
import { SubscribeOptionsComponent } from './subscribe-options/subscribe-options.component';
import { LoaderComponent } from './loader/loader.component';
import { BksforyouComponent } from './bksforyou/bksforyou.component';
import { CoinShopComponent } from './coin-shop/coin-shop.component';
import { MstRtdComponent } from './mst-rtd/mst-rtd.component';
import { btmSheeto } from './trending/btmsheet';
import { TrxHistComponent } from './trx-hist/trx-hist.component';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
   override overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    PayoutComponent,
    MydetailsComponent,
    HomeComponent,
    AirtimeComponent,
    DataComponent,
    EnergyComponent,
    CableComponent,
    NavComponent,
    HomeViewComponent,
    PopularComponent,
    TrendingComponent,
    GenresComponent,
    FavAuthorComponent,
    CrntReadingComponent,
    btmSheet,
    ReadBookComponent,
    LoginComponent,
    SignupComponent,
    AnnouncerComponent,
    MyprofileComponent,
    SearchComponent,
    AboutBookComponent,
    SubscribeOptionsComponent,
    LoaderComponent,
    btmSheetf,
    btmSheeto,
    btmSheetq,
    btmSheetw,
    btmSheete,
    BksforyouComponent,
    CoinShopComponent,
    MstRtdComponent,
    TrxHistComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    FormsModule,
    MatBottomSheetModule,
    ReactiveFormsModule,MatToolbarModule,
    MatInputModule,MatTabsModule,MatListModule,MatIconModule,MatSelectModule,MatChipsModule,
    MatSelectModule,MatButtonModule,MatFormFieldModule,MatCardModule,MatSidenavModule,
    //  Angular4PaystackModule.forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),
    // mine Angular4PaystackModule.forRoot('pk_live_10dfaf3fd6d08ffef3247b28306e269ed3e220ce'),
    Angular4PaystackModule.forRoot('pk_live_26a3a092033f86576be06d25e494d0b1e24ef479'),

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
  exports:[
    MatChipsModule,
    MatChip,

  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  
  entryComponents: [
    btmSheet,
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
