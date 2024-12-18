import { TestBed } from '@angular/core/testing';

import { CorosService } from './coros.service';

describe('CorosService', () => {
  let service: CorosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
