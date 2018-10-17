import { TestBed, inject } from '@angular/core/testing';

import { VaktijeService } from '../vaktije.service';

describe('VaktijeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaktijeService]
    });
  });

  it('should be created', inject([VaktijeService], (service: VaktijeService) => {
    expect(service).toBeTruthy();
  }));
});
