import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipe-form',
  templateUrl: './pipe-form.component.html',
  styleUrls: ['./pipe-form.component.css']
})
export class PipeFormComponent implements OnInit {
  assets: string = '';
  noPipeNum: string = '';
  constructor() {}

  ngOnInit() {
  }
  getAsset(): number{
    return parseFloat(this.assets.replace(/[^0-9\.]/g, ''));
  }
  addHero(boxvalue: string = ''){
    // this.noPipeNum = boxvalue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.noPipeNum = boxvalue.replace(/[^0-9\.]/g, '');
    console.log('boxvalue: '+boxvalue);
    console.log('noPipeNum '+this.noPipeNum);
    console.log('conversion: '+new Intl.NumberFormat('es-MX', { style:'decimal', minimumFractionDigits: 2}).format(parseFloat(this.noPipeNum)));
    
    this.noPipeNum = new Intl.NumberFormat('es-MX', { style:'decimal', minimumFractionDigits: 2}).format(parseFloat(this.noPipeNum));
  }

}
