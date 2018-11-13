import { TestBed } from '@angular/core/testing';

import { InMemoryDataAuftragService } from './in-memory-data-auftrag.service';

describe('InMemoryDataAuftragService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataAuftragService = TestBed.get(InMemoryDataAuftragService);
    expect(service).toBeTruthy();
  });
});
