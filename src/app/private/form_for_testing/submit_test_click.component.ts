@Component({
  selector: 'app-submit',
  template: `
    <button (click)="onSubmit()">Submit</button>
    {{clickButton}}`
})
  export class SubmitComponent {
    clickButton = '';

    onSubmit(){
      this.clickButton = 'testing are you gay';
    }
}
