import { TestBed, inject } from '@angular/core/testing';

import { DatacarrierService } from './datacarrier.service';

describe('DatacarrierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacarrierService]
    });
  });

  it('should be created', inject([DatacarrierService], (service: DatacarrierService) => {
    expect(service).toBeTruthy();
  }));
});
