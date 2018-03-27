import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserDataFormComponent } from './corporate-user-data-form.component';

describe('CorporateUserDataFormComponent', () => {
  let component: CorporateUserDataFormComponent;
  let fixture: ComponentFixture<CorporateUserDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateUserDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateUserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
