import { TestBed } from '@angular/core/testing';

import { EtreformateurService } from './etreformateur.service';

describe('EtreformateurService', () => {
  let service: EtreformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtreformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
