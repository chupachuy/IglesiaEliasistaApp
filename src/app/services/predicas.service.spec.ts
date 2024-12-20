import { TestBed } from '@angular/core/testing';

import { PredicasService } from './predicas.service';

describe('PredicasService', () => {
  let service: PredicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
