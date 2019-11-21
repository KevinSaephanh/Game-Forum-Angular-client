import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './shared/components/login/login.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarouselNewComponent } from './carousel-new/carousel-new.component';
import { CarouselPopularComponent } from './carousel-popular/carousel-popular.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    CarouselPopularComponent,
    CarouselNewComponent,
    NavbarComponent,
    GamesComponent,
    GameComponent,
    HomePageComponent,
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CarouselPopularComponent],
  entryComponents: [CarouselPopularComponent]
})
export class AppModule { }