import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLeasingDataFormComponent } from './private-leasing-data-form.component';

describe('PrivateLeasingDataFormComponent', () => {
  let component: PrivateLeasingDataFormComponent;
  let fixture: ComponentFixture<PrivateLeasingDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLeasingDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLeasingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
