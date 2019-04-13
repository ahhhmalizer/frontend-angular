import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecordComponent } from './page-record.component';

describe('PageRecordComponent', () => {
  let component: PageRecordComponent;
  let fixture: ComponentFixture<PageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
