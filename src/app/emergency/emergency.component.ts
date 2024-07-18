import { Component } from '@angular/core';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent {


  emergencyContacts: any[] = [
    { name: 'Emergency Contact 1', phone: '123-456-7890' },
    { name: 'Emergency Contact 2', phone: '456-789-0123' },
    { name: 'Emergency Contact 3', phone: '789-012-3456' }
    // Add more emergency contacts as needed
  ];

  locatePatient() {
    // Implement GPS tracking functionality
    alert('Implement GPS tracking to locate the patient.');
  }
  
}
