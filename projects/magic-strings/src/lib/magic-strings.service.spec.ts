import { TestBed } from '@angular/core/testing';

import { MagicStringsService } from './magic-strings.service';

describe('MagicStringsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicStringsService = TestBed.get(MagicStringsService);
    expect(service).toBeTruthy();
  });
});
