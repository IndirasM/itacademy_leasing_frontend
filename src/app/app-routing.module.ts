import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModule } from './private/private.module';
import { PrivateUserDataFormComponent } from './private/private-user-data-form/private-user-data-form.component';
import { PrivateLeasingDataFormComponent } from './private/private-leasing-data-form/private-leasing-data-form.component';
import { FormPreviewComponent } from './private/form-preview/form-preview.component';
import { CorporateUserDataFormComponent } from './corporate/corporate-user-data-form/corporate-user-data-form.component';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './stepper/stepper.component';
import { CorporateLeasingDataFormComponent } from './corporate/corporate-leasing-data-form/corporate-leasing-data-form.component';
import { EndScreenComponent } from './end-screen/end-screen.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'private', component: PrivateLeasingDataFormComponent},
  {path: 'corporate', component: CorporateLeasingDataFormComponent},
  {path: 'form', component: PrivateUserDataFormComponent},
  {path: 'preview', component: FormPreviewComponent},
  {path: 'home',component: HomeComponent},
  {path: 'stepper',component: StepperComponent},
  {path: 'finish',component: EndScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
