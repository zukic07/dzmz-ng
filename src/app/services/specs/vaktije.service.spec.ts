import { TestBed } from '@angular/core/testing';

import { VaktijeService } from './../vaktije.service';

describe('VaktijeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaktijeService = TestBed.get(VaktijeService);
    expect(service).toBeTruthy();
  });
});
