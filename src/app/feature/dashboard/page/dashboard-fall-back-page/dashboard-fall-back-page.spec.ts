import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFallBackPage } from './dashboard-fall-back-page';

describe('DashboardFallBackPage', () => {
  let component: DashboardFallBackPage;
  let fixture: ComponentFixture<DashboardFallBackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFallBackPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFallBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
