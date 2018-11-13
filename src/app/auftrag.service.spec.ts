import { TestBed } from '@angular/core/testing';

import { AuftragService } from './auftrag.service';

describe('AuftragService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuftragService = TestBed.get(AuftragService);
    expect(service).toBeTruthy();
  });
});
