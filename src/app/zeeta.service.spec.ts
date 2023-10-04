import { TestBed } from '@angular/core/testing';

import { ZeetaService } from './zeeta.service';

describe('ZeetaService', () => {
  let service: ZeetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
