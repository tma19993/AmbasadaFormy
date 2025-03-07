import { TestBed } from '@angular/core/testing';

import { FormDeactivateGuard } from './form-deactivate.guard';
import { Type } from '@angular/core';

describe('FormDeactivateGuard', () => {
  let guard: FormDeactivateGuard<Record<'form' | 'searchForm', { dirty: boolean }>>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
