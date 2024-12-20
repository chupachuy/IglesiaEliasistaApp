import { TestBed } from '@angular/core/testing';

import { DevocionarioService } from './devocionario.service';

describe('DevocionarioService', () => {
  let service: DevocionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevocionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
