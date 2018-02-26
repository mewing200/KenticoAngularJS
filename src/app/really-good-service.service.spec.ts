import { TestBed, inject } from '@angular/core/testing';

import { ReallyGoodServiceService } from './really-good-service.service';

describe('ReallyGoodServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReallyGoodServiceService]
    });
  });

  it('should be created', inject([ReallyGoodServiceService], (service: ReallyGoodServiceService) => {
    expect(service).toBeTruthy();
  }));
});
