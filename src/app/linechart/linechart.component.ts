import { Component } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss'
})
export class LinechartComponent {
  lineChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Reports/Today',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'line',
        dataPoints: [
        { label: 'Monday', y: 7},
        { label: 'Tuesday', y: 8 },
        { label: 'Wednesday', y: 5 },
        { label: 'Thursday', y: 4 },
        { label: 'Friday', y: 7 },
        ],
    },
    ],
  };
}
