import { TestBed } from '@angular/core/testing';

import { DataLoadServiceService } from './data-load-service.service';

describe('DataLoadServiceService', () => {
  let service: DataLoadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
