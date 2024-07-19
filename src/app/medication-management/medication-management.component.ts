import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataService } from '../add-medication/data.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gaurav', weight: '2:00 AM', symbol: 'Dolo 500'},
  {position: 1, name: 'Rubina', weight: '23:00 AM', symbol: 'Dolo 500'},
  {position: 1, name: 'Prashant', weight: '21:00 AM', symbol: 'Dolo 500'},
  {position: 1, name: 'Vinay', weight: '21:00 AM', symbol: 'Dolo 500'},
  {position: 1, name: 'Abhilasha', weight: '12:00 AM', symbol: 'Dolo 500'},
  {position: 1, name: 'Phalguni', weight: '02:00 AM', symbol: 'Dolo 500'},
];

@Component({
  selector: 'app-medication-management',
  templateUrl: './medication-management.component.html',
  styleUrls: ['./medication-management.component.css']
})
export class MedicationManagementComponent implements OnInit{
  jsonData: any;

  
  constructor(private dataService: DataService){

  }

  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.jsonData = data;
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
