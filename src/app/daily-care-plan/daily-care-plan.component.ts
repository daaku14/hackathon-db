import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily-care-plan',
  templateUrl: './daily-care-plan.component.html',
  styleUrls: ['./daily-care-plan.component.css']
})
export class DailyCarePlanComponent {


  carePlanForm: FormGroup;
  carePlans: string[] = [];

  constructor(private fb: FormBuilder) {
    this.carePlanForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  addTask() {
    if (this.carePlanForm.valid) {
      this.carePlans.push(this.carePlanForm.value.task);
      this.carePlanForm.reset();
    }
  }

  removeTask(index: number) {
    this.carePlans.splice(index, 1);
  }
}

