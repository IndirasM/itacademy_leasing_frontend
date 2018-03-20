import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import { PrivateLeasingFormComponent } from './private/private-leasing-form/private-leasing-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "private", component: PrivateLeasingFormComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
