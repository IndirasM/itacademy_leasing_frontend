import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLeasingFormListComponent } from './private-leasing-form-list.component';

describe('PrivateLeasingFormListComponent', () => {
  let component: PrivateLeasingFormListComponent;
  let fixture: ComponentFixture<PrivateLeasingFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLeasingFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLeasingFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
