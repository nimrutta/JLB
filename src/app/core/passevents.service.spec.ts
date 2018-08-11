import { TestBed, inject } from '@angular/core/testing';

import { PasseventsService } from './passevents.service';

describe('PasseventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasseventsService]
    });
  });

  it('should be created', inject([PasseventsService], (service: PasseventsService) => {
    expect(service).toBeTruthy();
  }));
});
