import { TestBed } from '@angular/core/testing';

import { UiprozessService } from './uiprozess.service';

describe('UiprozessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiprozessService = TestBed.get(UiprozessService);
    expect(service).toBeTruthy();
  });
});
