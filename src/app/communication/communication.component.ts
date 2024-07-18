import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {

  familyMessageForm: FormGroup;
  professionalMessageForm: FormGroup;
  familyMessages: string[] = [];
  professionalMessages: string[] = [];

  constructor(private fb: FormBuilder) {
    this.familyMessageForm = this.fb.group({
      message: ['', Validators.required]
    });

    this.professionalMessageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  sendFamilyMessage() {
    if (this.familyMessageForm.valid) {
      this.familyMessages.push(this.familyMessageForm.value.message);
      this.familyMessageForm.reset();
    }
  }

  sendProfessionalMessage() {
    if (this.professionalMessageForm.valid) {
      this.professionalMessages.push(this.professionalMessageForm.value.message);
      this.professionalMessageForm.reset();
    }
  }
  

}
