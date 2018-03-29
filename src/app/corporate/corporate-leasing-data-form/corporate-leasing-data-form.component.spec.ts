import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLeasingDataFormComponent } from './corporate-leasing-data-form.component';

describe('CorporateLeasingDataFormComponent', () => {
  let component: CorporateLeasingDataFormComponent;
  let fixture: ComponentFixture<CorporateLeasingDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateLeasingDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateLeasingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
