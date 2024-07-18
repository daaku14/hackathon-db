import { Component } from '@angular/core';
import { Hero } from './medication';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }


newHero() {
this.model = new Hero(42, '', '');
}

skyDog(): Hero {
const myHero =  new Hero(42, 'SkyDog',
                   'Fetch any object at any distance',
                   'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
return myHero;
}

//////// NOT SHOWN IN DOCS ////////

// Reveal in html:
//   Name via form.controls = {{showFormControls(heroForm)}}
showFormControls(form: any) {
return form && form.controls.name &&
form.controls.name.value; // Dr. IQ
}

/////////////////////////////

}