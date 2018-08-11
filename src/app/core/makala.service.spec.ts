import { TestBed, inject } from '@angular/core/testing';

import { MakalaService } from './makala.service';

describe('MakalaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakalaService]
    });
  });

  it('should be created', inject([MakalaService], (service: MakalaService) => {
    expect(service).toBeTruthy();
  }));
});
