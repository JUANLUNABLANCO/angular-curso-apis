import { TestBed } from '@angular/core/testing';

import { TimeHttpInterceptor } from './time-http.interceptor';

describe('TimeHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TimeHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TimeHttpInterceptor = TestBed.inject(TimeHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
