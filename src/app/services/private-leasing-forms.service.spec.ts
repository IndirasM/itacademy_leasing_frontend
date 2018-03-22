import { TestBed, inject } from '@angular/core/testing';

import { PrivateLeasingFormsService } from './private-leasing-forms.service';

describe('PrivateLeasingFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateLeasingFormsService]
    });
  });

  it('should be created', inject([PrivateLeasingFormsService], (service: PrivateLeasingFormsService) => {
    expect(service).toBeTruthy();
  }));
});
