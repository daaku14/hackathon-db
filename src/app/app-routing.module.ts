import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyCarePlanComponent } from './daily-care-plan/daily-care-plan.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { CommunicationComponent } from './communication/communication.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { GalaryComponent } from './galary/galary.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { CalanderComponent } from './calander/calander.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: 'profile', component: PatientProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'daily-plan', component: DailyCarePlanComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'training', component: TrainingsComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'galary', component: GalaryComponent },
  { path: 'image', component: ImagesComponent },
  { path: 'calandar', component: CalanderComponent },
  { path: 'medication', component: MedicationManagementComponent },
  { path: 'add-medication', component: AddMedicationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
