import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';
import { CguComponent } from './pages/cgu/cgu.component';

const routes: Routes = [
  { path: 'mentions-legales', component: LegalmentionsComponent},
  { path: 'CGU', component: CguComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
