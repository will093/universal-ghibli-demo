import { TestBed } from '@angular/core/testing';

import { FilmsDataService } from './films-data.service';

describe('FilmsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsDataService = TestBed.get(FilmsDataService);
    expect(service).toBeTruthy();
  });
});
