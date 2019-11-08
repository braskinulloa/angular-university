import { Component, OnInit } from '@angular/core';
import { preguntas_seguridad } from 'src/app/Components/form-para-components/preguntas_seguridad';
// import { DazaGenericosModule } from '../../Modules/dazgenericos/daza-genericos.module';

@Component({
  selector: 'app-form-para-components',
  templateUrl: './form-para-components.component.html',
  styleUrls: ['./form-para-components.component.css']
})
export class FormParaComponentsComponent implements OnInit {

  arrvalsTemp: string;
  
  title: string;
  multiple: boolean = false;
  arrvals: any = preguntas_seguridad; 


  selectValues: string[];

  constructor() {
  }

  ngOnInit() {
  }

  changeMultiple(){
    this.multiple = this.multiple?false:true;
  }


  dazaSelectValues(values: string[]){
    this.selectValues = values;
  }
}
