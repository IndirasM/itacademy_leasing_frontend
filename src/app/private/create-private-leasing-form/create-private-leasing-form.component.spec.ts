import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrivateLeasingFormComponent } from './create-private-leasing-form.component';

describe('CreatePrivateLeasingFormComponent', () => {
  let component: CreatePrivateLeasingFormComponent;
  let fixture: ComponentFixture<CreatePrivateLeasingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrivateLeasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrivateLeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
