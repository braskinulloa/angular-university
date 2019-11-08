import { Component, OnInit } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
// import { DazaSelectComponent } from '../daza-select';

@Component({
  selector: 'app-directive-form',
  templateUrl: './directive-form.component.html',
  styleUrls: ['./directive-form.component.css']
})
export class DirectiveFormComponent implements OnInit {
  total = '';
  assets = '';

  language: string = 'es-MX';
  numDecimals: number = 4;
  isPercent: boolean= false;
  valid: boolean = true;

  constructor() {
  }

  ngOnInit() {}
  
  getPercent(){
    return  (!isNaN(parseFloat(this.assets.replace(/[^0-9\.]/g, ''))) && !isNaN(parseFloat(this.total.replace(/[^0-9\.]/g, ''))))
    ? 
    `${((parseFloat(this.assets.replace(/[^0-9\.]/g, ''))*100/parseFloat(this.total.replace(/[^0-9\.]/g, ''))).toFixed(this.numDecimals) )} %`
    :
    '%';
  }

  focusDate(){
    console.log('here');
    
    document.getElementById('date').focus();
  }

  clickButton(){
    console.log('hola button');
    // outputData($event);
  }
}
