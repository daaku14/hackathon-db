import { Component } from '@angular/core';
import { Hero } from './medication';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { DataService } from './data.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MedicationManagementComponent } from '../medication-management/medication-management.component';
import { MatDialog } from '@angular/material/dialog';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent {

SubmittedAnswers: any[] = [];
  QuestionsAndAnswers: any[] = [];
  //Sample test data it can be dynamic as well.
  QuestionsForSubmittedAnswersArray: any[] = [
    {
      Section: 1,
      QuestionID: 1,
      question: 'test',
      Answer_ShortTxt: 'testing',
      Answer_LongTxt: 'test desc',
      FeedBack: 'tested',
    },
    {
      Section: 2,
      QuestionID: 2,
      question: 'another',
      Answer_ShortTxt: 'again',
      Answer_LongTxt: 'once again',
      FeedBack: 'again another',
    },
  ];
  FeedBack!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.createContactForm(); // init form data
    this.sampleData(); // setting up the question array data into form.
  }

  createContactForm() {
    this.FeedBack = this.formBuilder.group({
      Rows: this.formBuilder.array([this.initRows()]),
    });
  }

  //getter function ease up to get the form controls
  get formArr() {
    return this.FeedBack.get('Rows') as FormArray;
  }

  initRows() {
    return this.formBuilder.group({
      Section: ['1'],
      QuestionID: ['1'],
      question: ['test'],
      Answer_ShortTxt: ['test'],
      Answer_LongTxt: ['test'],
      FeedBack: ['test'],
    });
  }

  sampleData() {
    this.QuestionsForSubmittedAnswersArray.forEach((row) => {
      this.formArr.push(this.addRow(row));
    });
  }

  addRow(obj: { Section: any; QuestionID: any; question: any; Answer_ShortTxt: any; Answer_LongTxt: any; FeedBack: any; }) {
    return this.formBuilder.group({
      Section: [obj.Section],
      QuestionID: [obj.QuestionID],
      question: [obj.question],
      Answer_ShortTxt: [obj.Answer_ShortTxt],
      Answer_LongTxt: [obj.Answer_LongTxt],
      FeedBack: [obj.FeedBack],
    });
  }

  addNewRow() {
    let obj1 = {
      Section: 1,
      QuestionID: 1,
      question: 'test',
      Answer_ShortTxt: 'testing',
      Answer_LongTxt: 'test desc',
      FeedBack: 'tested',
    };
    this.formArr.push(this.addRow(obj1));
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit1() {
    console.log('Your form data : ', this.FeedBack.value);
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
