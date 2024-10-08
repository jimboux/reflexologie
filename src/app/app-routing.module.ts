import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ReflexologieComponent } from './pages/reflexologie/reflexologie.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { SeancesComponent } from './pages/seances/seances.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConfidentialPoliticComponent } from './pages/confidential-politic/confidential-politic.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormSentComponent } from './pages/form-sent/form-sent.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'mentions-legales', component: LegalmentionsComponent },
  { path: 'CGU', component: CguComponent },
  { path: 'reflexologie', component: ReflexologieComponent },
  { path: 'reflexologie#presentation', component: ReflexologieComponent },
  { path: 'formulaire-envoyé', component: FormSentComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'seances', component: SeancesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'politique-confidentialite', component: ConfidentialPoliticComponent },
  { path: 'page-404', component: Page404Component },
  { path: '**', redirectTo: 'page-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
