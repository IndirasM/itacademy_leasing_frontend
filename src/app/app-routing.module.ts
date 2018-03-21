import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import { HomeComponent } from './home/home.component';
import {PrivateUserDataFormComponent} from './private/private-user-data-form/private-user-data-form.component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "form", component: PrivateUserDataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
