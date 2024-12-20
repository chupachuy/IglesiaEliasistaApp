import { TestBed } from '@angular/core/testing';

import { LatriaService } from './latria.service';

describe('LatriaService', () => {
  let service: LatriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
