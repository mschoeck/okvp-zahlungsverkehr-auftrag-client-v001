import { TestBed } from '@angular/core/testing';

import { AuthentifizierungService } from './authentifizierung.service';

describe('AuthorisierungService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentifizierungService = TestBed.get(AuthentifizierungService);
    expect(service).toBeTruthy();
  });
});
