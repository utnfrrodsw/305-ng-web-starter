import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const objectMock = {
    url: 'some-url'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        // ActivatedRouteSnapshot,
        // RouterStateSnapshot,
        { provide: ActivatedRouteSnapshot, useValue: objectMock },
        { provide: RouterStateSnapshot, useValue: objectMock }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate guard', () => {
    const activatedRoute = TestBed.inject(ActivatedRouteSnapshot);
    const routerSnapshot = TestBed.inject(RouterStateSnapshot);
    const result = guard.canActivate(activatedRoute, routerSnapshot) as Observable<boolean>;
    result.subscribe(value => expect(value).toEqual(true))
  });
});
