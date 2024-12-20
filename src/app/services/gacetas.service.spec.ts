import { TestBed } from '@angular/core/testing';

import { GacetasService } from './gacetas.service';

describe('GacetasService', () => {
  let service: GacetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GacetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
