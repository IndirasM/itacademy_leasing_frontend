import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLeasingFormComponent } from './private-leasing-form.component';

describe('PrivateLeasingFormComponent', () => {
  let component: PrivateLeasingFormComponent;
  let fixture: ComponentFixture<PrivateLeasingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLeasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
