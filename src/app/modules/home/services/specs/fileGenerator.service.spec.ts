import { TestBed, inject } from '@angular/core/testing';

import { FileGeneratorService } from '../fileGenerator.service';

describe('FileGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileGeneratorService]
    });
  });

  it('should be created', inject([FileGeneratorService], (service: FileGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
