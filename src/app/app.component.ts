import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormPreviewComponent } from './private/form-preview/form-preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['input.ng-invalid {border-color: red}'],

})
export class AppComponent {
  title = 'Car leasing form';
}
