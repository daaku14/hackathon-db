
import { Component, ElementRef, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Patient Bar Chart'
    },
    xAxis: {
      categories: ['Episodic memory Test', 'Verbal Fluency Test ', 'Decisioning Test']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      type: 'bar',
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      type: 'bar',
      name: 'John',
      data: [5, 7, 3]
    }]
  };
  
  
  chartOptionsarea: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Patient Area Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      type: 'area',
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }]
  };


  chartOptionspie: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Patient Pie Chart'
    },
    series: [{
      type: 'pie',
      name: 'Brands',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Other', y: 7.05 }
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}