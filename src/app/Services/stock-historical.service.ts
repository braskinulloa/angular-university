import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StockHistoricalService {
  url: string = 'https://eodhistoricaldata.com/api/eod/';
  apiToken: string = '5e1e3cc617a1c2.70775277';
  constructor(private http: HttpClient) { }
  /**
   * @function getHistorical Get the values from https://eodhistoricaldata.com/ API
   * @param exSymbolName Exchange symbol name from  https://eodhistoricaldata.com/knowledgebase/list-supported-exchanges/
   * @param exId Exchange symbol Id from https://eodhistoricaldata.com/knowledgebase/list-supported-exchanges/
   * @param period the number of data points used to calculate each moving average value. Valid range from 2 to 100000 with the default value – 50.
   * @param from you can use these parameters with format ‘YYYY-MM-DD’. 
   * @param to you can use these parameters with format ‘YYYY-MM-DD’. 
   * @param order use ‘a’ for ascending dates (from old to new) and ‘d’ for descending dates (from new to old). By default, dates are shown in descending order.
   * @param fmt the output format, could be ‘json’ for JSON and ‘csv’ for CSV output. The default value is ‘json’.
   * @param exFunction The function that will be applied to data series to get technical indicator data. 
   */
  getHistorical(
    exSymbolName: string,
    exId: string,
    period?: string, 
    from?: string, 
    to?: string, 
    order: string = 'd', 
    fmt: string = 'json',
    exFunction: string='sma'
    )
    {
    this.url += exSymbolName+'.'+exId+'?api_token='+this.apiToken+(order?'&order='+order:'')+'&fmt='+fmt;
    // this.url += exFunction??Object.keys(exFunction).reduce((r, k)=>{ return r+=`&${k}=${r[k]}`});
    this.url += (from?'&from='+from:'')+(to?'&to='+to:'')+'&function='+exFunction+(period?'&period='+period:'');
    return this.http.get(this.url, { headers: new HttpHeaders({'Content-Type': 'application/json','Authorization': '5e20aec1ec5360.56085265'})}).pipe(map(data => {
      return data;
    }))
  }
}
