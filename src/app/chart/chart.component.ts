import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Chart } from '../chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit{
  editable = false;

  @Input()
  chart!: Chart;
  @Input()
  data!: string;
  @Output() remove = new EventEmitter<Chart>();


  ngAfterViewInit(){
    
  
  }
}
