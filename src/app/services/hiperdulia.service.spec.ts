import { TestBed } from '@angular/core/testing';

import { HiperduliaService } from './hiperdulia.service';

describe('HiperduliaService', () => {
  let service: HiperduliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiperduliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
