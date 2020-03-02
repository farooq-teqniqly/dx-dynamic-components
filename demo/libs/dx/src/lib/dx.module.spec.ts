import { async, TestBed } from '@angular/core/testing';
import { DxModule } from './dx.module';

describe('DxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DxModule).toBeDefined();
  });
});
