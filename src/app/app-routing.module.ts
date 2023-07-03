import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ReflexologieComponent } from './pages/reflexologie/reflexologie.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { SeancesComponent } from './pages/seances/seances.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'mentions-legales', component: LegalmentionsComponent},
  { path: 'CGU', component: CguComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'reflexologie', component: ReflexologieComponent},
  { path: 'a-propos', component: AproposComponent},
  { path: 'seances', component: SeancesComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
