import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChooseAudienceComponent } from './page-choose-audience.component';

describe('PageChooseAudienceComponent', () => {
  let component: PageChooseAudienceComponent;
  let fixture: ComponentFixture<PageChooseAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChooseAudienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChooseAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
