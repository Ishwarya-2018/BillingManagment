import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  pieChartLabels: string[] = ['LUXURY SEDAN ', 'SUV', 'HATHBACK'];
  pieChartData: number[] = [20, 15, 10];
   
  public lineChartOptions:any = {
    legend : {
        labels : {
          fontColor : '#ffffff',
          size: "40px",
        }
    }
};
  pieChartType = 'pie';
  constructor() {}

  ngOnInit() {}
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}