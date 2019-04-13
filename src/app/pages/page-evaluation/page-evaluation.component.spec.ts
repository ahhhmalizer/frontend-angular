import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEvaluationComponent } from './page-evaluation.component';

describe('PageEvaluationComponent', () => {
  let component: PageEvaluationComponent;
  let fixture: ComponentFixture<PageEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
