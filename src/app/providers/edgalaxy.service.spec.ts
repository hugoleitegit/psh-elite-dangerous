import { TestBed } from '@angular/core/testing';

import { EdgalaxyService } from './edgalaxy.service';

describe('EdgalaxyService', () => {
  let service: EdgalaxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgalaxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
