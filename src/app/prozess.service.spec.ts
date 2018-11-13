import { TestBed } from '@angular/core/testing';

import { ProzessService } from './prozess.service';

describe('ProzessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProzessService = TestBed.get(ProzessService);
    expect(service).toBeTruthy();
  });
});
