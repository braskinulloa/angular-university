import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockHistoricalService } from 'src/app/Services/stock-historical.service';

@Component({
  selector: 'app-api-use',
  templateUrl: './api-use.component.html',
  styleUrls: ['./api-use.component.css']
})
export class ApiUseComponent implements OnInit {
  url: string;
  chartData: any;


  constructor(private http: HttpClient, private stockService: StockHistoricalService) { }
  ngOnInit() {
    // this.stockService.getHistorical('AAPL', 'US', null, '2017-01-05', '2017-02-10').subscribe((res)=>{
    //   this.chartData = res;
    // });
    this.chartData = [
      {date: "2017-02-10", open: 132.46, high: 132.94, low: 132.05, close: 132.12},
    {date: "2017-02-09", open: 131.65, high: 132.445, low: 131.12, close: 132.42},
    {date: "2017-02-08", open: 131.35, high: 132.22, low: 131.22, close: 132.04},
    {date: "2017-02-07", open: 130.54, high: 132.09, low: 130.45, close: 131.53},
    {date: "2017-02-06", open: 129.13, high: 130.5, low: 128.9, close: 130.29},
    {date: "2017-02-03", open: 128.31, high: 129.19, low: 128.16, close: 129.08},
    {date: "2017-02-02", open: 127.975, high: 129.39, low: 127.78, close: 128.53},
    {date: "2017-02-01", open: 127.03, high: 130.49, low: 127.01, close: 128.75},
    {date: "2017-01-31", open: 121.15, high: 121.39, low: 120.62, close: 121.35},
    {date: "2017-01-30", open: 120.93, high: 121.63, low: 120.66, close: 121.63},
      {date: "2017-01-27", open: 122.14, high: 122.35, low: 121.6, close: 121.95},
      {date: "2017-01-26", open: 121.67, high: 122.44, low: 121.6, close: 121.94},
      {date: "2017-01-25", open: 120.42, high: 122.1, low: 120.28, close: 121.88},
      {date: "2017-01-24", open: 119.55, high: 120.1, low: 119.5, close: 119.97},
      {date: "2017-01-23", open: 120, high: 120.81, low: 119.77, close: 120.08},
      {date: "2017-01-20", open: 120.45, high: 120.45, low: 119.7346, close: 120},
      {date: "2017-01-19", open: 119.4, high: 120.09, low: 119.37, close: 119.78},
      {date: "2017-01-18", open: 120, high: 120.5, low: 119.71, close: 119.99},
      {date: "2017-01-17", open: 118.34, high: 120.24, low: 118.22, close: 120},
      {date: "2017-01-13", open: 119.11, high: 119.62, low: 118.81, close: 119.04},
      {date: "2017-01-12", open: 118.895, high: 119.3, low: 118.21, close: 119.25},
      {date: "2017-01-11", open: 118.74, high: 119.93, low: 118.6, close: 119.75},
      {date: "2017-01-10", open: 118.77, high: 119.38, low: 118.3, close: 119.11},
      {date: "2017-01-09", open: 117.95, high: 119.43, low: 117.94, close: 118.99},
      {date: "2017-01-06", open: 116.78, high: 118.16, low: 116.47, close: 117.91},
      {date: "2017-01-05", open: 115.92, high: 116.8642, low: 115.81, close: 116.61}
    ];
    // console.log(this.chartData);
    
  }
}
