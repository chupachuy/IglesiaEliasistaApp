import { TestBed } from '@angular/core/testing';

import { DuliaService } from './dulia.service';

describe('DuliaService', () => {
  let service: DuliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
