import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainpageMobileComponent } from './mainpage-mobile/mainpage-mobile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavSideComponent,
    MainpageComponent,
    MainpageMobileComponent,
    AboutusComponent,
    MenuComponent,
    CateringComponent,
    ContactusComponent,
    LocationComponent,
    FooterComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
