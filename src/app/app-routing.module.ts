import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import {PrivateUserDataFormComponent} from './private/private-user-data-form/private-user-data-form.component';
import { PrivateLeasingDataFormComponent } from './private/private-leasing-data-form/private-leasing-data-form.component';
const routes: Routes = [
  {path: "private", component: PrivateLeasingDataFormComponent},
  {path: "form", component: PrivateUserDataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
