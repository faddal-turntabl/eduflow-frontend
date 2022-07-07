import { TestBed } from '@angular/core/testing';

import { QuestiondetailsService } from './questiondetails.service';

describe('QuestiondetailsService', () => {
  let service: QuestiondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestiondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
