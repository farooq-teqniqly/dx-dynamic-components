import { async, TestBed } from '@angular/core/testing';
import { QueryEditorModule } from './query-editor.module';

describe('QueryEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QueryEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QueryEditorModule).toBeDefined();
  });
});
