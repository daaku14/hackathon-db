import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MedicationManagementComponent } from '../medication-management/medication-management.component';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {

  patientForm: FormGroup;

  constructor(private fb: FormBuilder , public dialog: MatDialog){
    
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

   ngOnInit() {
   }

   onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      // Here you can handle the form submission, e.g., send the data to a server
      alert('Patient details saved successfully!');
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }


  openDialog() {
    const dialogRef = this.dialog.open(MedicationManagementComponent ,{
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '1000px',
      panelClass: 'full-screen-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
