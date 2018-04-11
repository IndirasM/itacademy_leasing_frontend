import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateUserDataFormComponent } from './private-user-data-form.component';

describe('PrivateUserDataFormComponent', () => {
  let component: PrivateUserDataFormComponent;
  let fixture: ComponentFixture<PrivateUserDataFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PrivateUserDataFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateUserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
