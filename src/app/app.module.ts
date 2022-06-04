import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import {NavigatorComponent} from "./navigator/navigator.component";
import { ShopComponent } from './shop/shop.component';
import { NavigationModule } from './navigation.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    NavigatorComponent,
    ShopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavigationModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatMenuModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
