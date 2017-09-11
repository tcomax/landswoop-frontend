import { TestBed, inject } from '@angular/core/testing';

import { BuyLandService } from './buy-land.service';

describe('BuyLandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyLandService]
    });
  });

  it('should be created', inject([BuyLandService], (service: BuyLandService) => {
    expect(service).toBeTruthy();
  }));
});
