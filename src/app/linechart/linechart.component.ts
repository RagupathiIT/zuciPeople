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
        { label: 'Monday', y: 5},
        { label: 'Tuesday', y: 7 },
        { label: 'Wednesday', y: 9 },
        { label: 'Thursday', y: 8 },
        { label: 'Friday', y: 9 },
        ],
    },
    ],
  };
}
