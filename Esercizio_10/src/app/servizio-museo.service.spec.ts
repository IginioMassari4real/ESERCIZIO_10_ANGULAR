import { TestBed } from '@angular/core/testing';

import { ServizioMuseoService } from './servizio-museo.service';

describe('ServizioMuseoService', () => {
  let service: ServizioMuseoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioMuseoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
