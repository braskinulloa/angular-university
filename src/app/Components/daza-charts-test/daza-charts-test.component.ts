import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daza-charts-test',
  templateUrl: './daza-charts-test.component.html',
  styleUrls: ['./daza-charts-test.component.css']
})
export class DazaChartsTestComponent implements OnInit {
  chart_data = {
    title: 'Countries',
    data: [
        { "name": "Germany", "value": 335 },
        { "name": "France", "value": 310 },
        { "name": "Canada", "value": 800 },
        { "name": "Russia", "value": 135 },
        { "name": "USA", "value": 1548  }
    ],
  };
  newOptions = {
    legend: {
      selectedMode: false,
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif'
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
