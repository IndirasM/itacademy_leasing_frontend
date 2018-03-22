import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import { PrivateLeasingFormComponent } from './private/private-leasing-form-list/private-leasing-form/private-leasing-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateLeasingFormsComponent } from './private/private-leasing-forms/private-leasing-forms.component';

const routes: Routes = [
  {path: 'private', component: PrivateLeasingFormComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
