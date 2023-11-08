import { TestBed } from '@angular/core/testing';

import { BookfindService } from './bookfind.service';

describe('BookfindService', () => {
  let service: BookfindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookfindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
