import { TestBed } from '@angular/core/testing';

import { ExpressMongoDBService } from './express-mongo-db.service';

describe('ExpressMongoDBService', () => {
  let service: ExpressMongoDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressMongoDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
