import { TestBed, inject } from '@angular/core/testing';

import { BidhaaService } from './bidhaa.service';

describe('BidhaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BidhaaService]
    });
  });

  it('should be created', inject([BidhaaService], (service: BidhaaService) => {
    expect(service).toBeTruthy();
  }));
});
