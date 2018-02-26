import { TestBed, inject } from '@angular/core/testing';

import { ReallyGoodServiceService } from './really-good-service.service';

describe('ReallyGoodServiceService', () => {

  // tslint:disable-next-line:prefer-const
  let service: ReallyGoodServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReallyGoodServiceService]
    });
    this.service = TestBed.get(ReallyGoodServiceService);
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });
});
