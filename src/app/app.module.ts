import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunicationComponent } from './communication/communication.component';
import { DailyCarePlanComponent } from './daily-care-plan/daily-care-plan.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { DashboardComponent }from './dashboard/dashboard.component';
import { MedicationManagementComponent } from './medication-management/medication-management.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { GalaryComponent } from './galary/galary.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { ChartModule, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CalanderComponent } from './calander/calander.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    DailyCarePlanComponent,
    EmergencyComponent,
    DashboardComponent,
    MedicationManagementComponent,
    PatientProfileComponent,
    TrainingsComponent,
    GalaryComponent,
    AddMedicationComponent,
    CalanderComponent,
    ImagesComponent,

  ],
  imports: [
    ChartModule,
    HighchartsChartModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatBadgeModule,
    MatChipsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FullCalendarModule,
    FlatpickrModule.forRoot(),


  
    
  ],
  providers: [LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
