import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import {PrivateUserDataFormComponent} from './private/private-user-data-form/private-user-data-form.component';
import { PrivateLeasingDataFormComponent } from './private/private-leasing-data-form/private-leasing-data-form.component';
import {FormPreviewComponent} from './private/form-preview/form-preview.component';
import { CorporateLeasingDataFormComponent } from './private/corporate-leasing-data-form/corporate-leasing-data-form.component';
const routes: Routes = [
  {path: 'private', component: PrivateLeasingDataFormComponent},
  {path: 'form', component: PrivateUserDataFormComponent},
  {path: 'preview', component: FormPreviewComponent},
  {path: 'business', component: CorporateLeasingDataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
