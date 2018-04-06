import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedFormSearchComponent } from './submitted-form-search.component';

describe('SubmittedFormSearchComponent', () => {
  let component: SubmittedFormSearchComponent;
  let fixture: ComponentFixture<SubmittedFormSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedFormSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
