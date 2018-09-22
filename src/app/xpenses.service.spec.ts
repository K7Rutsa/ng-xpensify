import { TestBed } from '@angular/core/testing';

import { XpensesService } from './xpenses.service';

describe('XpensesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XpensesService = TestBed.get(XpensesService);
    expect(service).toBeTruthy();
  });
});
