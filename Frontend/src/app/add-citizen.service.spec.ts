import { TestBed } from '@angular/core/testing';

import { AddCitizenService } from './add-citizen.service';

describe('AddCitizenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCitizenService = TestBed.get(AddCitizenService);
    expect(service).toBeTruthy();
  });
});
