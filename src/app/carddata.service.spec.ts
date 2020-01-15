import { TestBed } from '@angular/core/testing';

import { CarddataService } from './carddata.service';

describe('CarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarddataService = TestBed.get(CarddataService);
    expect(service).toBeTruthy();
  });
});
