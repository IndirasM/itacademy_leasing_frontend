import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLeasingFormsComponent } from './private-leasing-forms.component';

describe('PrivateLeasingFormsComponent', () => {
  let component: PrivateLeasingFormsComponent;
  let fixture: ComponentFixture<PrivateLeasingFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLeasingFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLeasingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
