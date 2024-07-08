import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ReflexologieComponent } from './pages/reflexologie/reflexologie.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { SeancesComponent } from './pages/seances/seances.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';
import { ConfidentialPoliticComponent } from './pages/confidential-politic/confidential-politic.component';
import { Page404Component } from './pages/page404/page404.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ArrowUpComponent } from './shared/arrow-up/arrow-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormSentComponent } from './pages/form-sent/form-sent.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ReflexologieComponent,
    AproposComponent,
    SeancesComponent,
    ContactComponent,
    CguComponent,
    LegalmentionsComponent,
    ConfidentialPoliticComponent,
    Page404Component,
    CarouselComponent,
    ArrowUpComponent,
    FormSentComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
