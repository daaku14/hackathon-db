import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCarePlanComponent } from './daily-care-plan.component';

describe('DailyCarePlanComponent', () => {
  let component: DailyCarePlanComponent;
  let fixture: ComponentFixture<DailyCarePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyCarePlanComponent]
    });
    fixture = TestBed.createComponent(DailyCarePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
