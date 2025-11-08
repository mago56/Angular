import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRouter } from './security-router';

describe('SecurityRouter', () => {
  let component: SecurityRouter;
  let fixture: ComponentFixture<SecurityRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
