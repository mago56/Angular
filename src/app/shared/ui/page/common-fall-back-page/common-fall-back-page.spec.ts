import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFallBackPage } from './common-fall-back-page';

describe('CommonFallBackPage', () => {
  let component: CommonFallBackPage;
  let fixture: ComponentFixture<CommonFallBackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonFallBackPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonFallBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
