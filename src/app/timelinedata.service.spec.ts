import { TestBed } from '@angular/core/testing';

import { TimelinedataService } from './timelinedata.service';

describe('TimelinedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelinedataService = TestBed.get(TimelinedataService);
    expect(service).toBeTruthy();
  });
});
