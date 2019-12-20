import { Component, OnInit, NgZone } from '@angular/core';
import { ADFRestService } from 'src/app/Services/adfrest.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import { EChartOption } from 'echarts';


import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-adf-rest-test',
  templateUrl: './adf-rest-test.component.html',
  styleUrls: ['./adf-rest-test.component.css']
})
export class AdfRestTestComponent implements OnInit {
  text: any;
  data: any;
  url = 'http://192.168.3.55:7101/AchModOrdenesElectronicas-RESTWebService-context-root/rest/v1';
  private chart: am4charts.PieChart;

  constructor(private achService: ADFRestService, private zone: NgZone) {}

  ngOnInit() { 
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(()=>{
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      chart.innerRadius = am4core.percent(40);
      pieSeries.slices.template.stroke = am4core.color("#4a2abb");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      this.chart = chart;
    });
    
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }



  //ngx-charts
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  view: any[] = [700, 400];
   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = false;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   yAxisLabel: string = 'Country';
   showYAxisLabel: boolean = true;
   xAxisLabel: string = 'Population';

   colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  escuchaHijo($event){
    this.achService.getData(this.url,{name: 'AchSolOeMacMe1'}, null,3,null,[{ column: 'SmaImporte', value: 1000, operator: '<'}],[{ column: 'SmaImporte', order: 'desc'}]).subscribe((res)=>{
      console.log(res);
      this.data = res['items'];
    });
  }
 
  datosObtenidos($event){}

}
