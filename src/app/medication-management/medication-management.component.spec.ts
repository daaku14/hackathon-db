import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationManagementComponent } from './medication-management.component';

describe('MedicationManagementComponent', () => {
  let component: MedicationManagementComponent;
  let fixture: ComponentFixture<MedicationManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationManagementComponent]
    });
    fixture = TestBed.createComponent(MedicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
