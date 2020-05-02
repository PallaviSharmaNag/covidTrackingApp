import { TestBed } from '@angular/core/testing';

import { HomepageCanActivateGuard } from './homepage-can-activate.guard';

describe('HomepageCanActivateGuard', () => {
  let guard: HomepageCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomepageCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
