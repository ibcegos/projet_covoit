import { TestBed } from '@angular/core/testing';

import { TrajetsService } from './trajets.service';

describe('TrajetsService', () => {
  let service: TrajetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrajetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
