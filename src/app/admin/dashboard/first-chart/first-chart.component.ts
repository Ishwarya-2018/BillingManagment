import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {
  doughnutChartLabels: string[] = [
    'DAY Simulation Time',
    'NIGHT Simulation Time'
  ];

  public lineChartOptions:any = {
    legend : {
        labels : {
          fontColor : '#ffffff',
          size: "40px",
        }
    }
};
  doughnutChartData = [178, 155];
  doughnutChartType = 'doughnut';

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
