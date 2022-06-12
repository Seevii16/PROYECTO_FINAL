import { TestBed } from '@angular/core/testing';

import { RecogerTokenService } from './recoger-token.service';

describe('RecogerTokenService', () => {
  let service: RecogerTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecogerTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
