import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daza-charts-test',
  templateUrl: './daza-charts-test.component.html',
  styleUrls: ['./daza-charts-test.component.css']
})
export class DazaChartsTestComponent implements OnInit {
  pie_chart_data = {
    title: 'Countries',
    data: [
        { "name": "Germany", "value": 335 },
        { "name": "France", "value": 310 },
        { "name": "Canada", "value": 800 },
        { "name": "Russia", "value": 135 },
        { "name": "USA", "value": 1548  }
    ],
  };
  bar_chart_data = {
    title: 'Countries',
    data: [
        { "name": "Germany", "value": 335 },
        { "name": "France", "value": 310 },
        { "name": "Canada", "value": 800 },
        { "name": "Russia", "value": 135 },
        { "name": "USA", "value": 1548  }
    ],
  };
  othersVal = 400;

  newOptions = {
    // legend: {
    //   selectedMode: false,
    //   textStyle: {
    //     color: '#02FB3B',
    //     fontStyle: 'normal',
    //     fontWeight: 'normal',
    //     fontFamily: 'sans-serif'
    //   }
    // },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{a} <br/>{b} : <b>{c}</b>',
    // },
  }

  multiple_xaxis_chart_data = {
    title: 'Bancos',
    xAxisData: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
      'enero'
    ],
    data: [
    {
      title: 'Banco BISA',
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    },
    {
      title: 'Banco BCP',
      data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
    },
    {
      title: 'Banco BNB',
      data: [4.9, 8.9, 11.1, 13.7, 48.5, 69.2, 255.6, 46.6, 70.2, 18.4, 14.3, 0.7],
    }
]};
  constructor() { }

  ngOnInit() {
  }

}
