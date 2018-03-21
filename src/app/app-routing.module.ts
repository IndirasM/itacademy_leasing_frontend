import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import { PrivateLeasingFormComponent } from './private/private-leasing-form/private-leasing-form.component';
import { HomeComponent } from './home/home.component';
import {PrivateUserDataFormComponent} from './private/private-user-data-form/private-user-data-form.component';
const routes: Routes = [
  {path: "private", component: PrivateLeasingFormComponent},
  {path: "", component: HomeComponent},
  {path: "form", component: PrivateUserDataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
