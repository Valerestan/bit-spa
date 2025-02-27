import { TestBed } from '@angular/core/testing';

import { ApirickyService } from './apiricky.service';

describe('ApirickyService', () => {
  let service: ApirickyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApirickyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
