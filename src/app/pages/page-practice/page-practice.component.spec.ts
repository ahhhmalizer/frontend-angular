import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePracticeComponent } from './page-practice.component';

describe('PagePracticeComponent', () => {
  let component: PagePracticeComponent;
  let fixture: ComponentFixture<PagePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
