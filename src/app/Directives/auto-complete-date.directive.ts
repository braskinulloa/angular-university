import { Directive, Input, HostListener, ElementRef, Output, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Directive({
  selector: '[appAutoCompleteDate]'
})
export class AutoCompleteDateDirective {
  el: any;
  date: Date;
  temp: string;
  control: any;

  constructor(el: ElementRef) {
    this.el = el;
  }
  @Input() language: string;
  
  @HostBinding('class.form-control-invalid') inValid: boolean = false;

  @HostListener('click') click(){
    this.convertDate(this.el.nativeElement);
  }
  @HostListener('keydown.enter') keydown(){
    this.convertDate(this.el.nativeElement);
  }
  convertDate(nativeE: any){
    if(nativeE.value == ''){
      this.inValid = false;
      return null;
    }else if(isNaN(Date.parse(nativeE.value))){
      console.log('invalid date');
      nativeE.value = '';
      this.inValid = true;
      return null;
    }else{
      this.inValid = false;
      console.log('valid date');
      this.date = new Date(nativeE.value);    
      let objvals: any = {};
      objvals.day = '2-digit';
      objvals.month = 'short';
      objvals.year = 'numeric';
      this.temp = new Intl.DateTimeFormat('es-ES', objvals).format(this.date);
      this.temp = this.temp.replace(/[^0-9a-zA-Z]/g, '').replace(/\s/g, '').toUpperCase(); //Quita todo exceptio numeros y letras-quita espacios-mayúscula
      nativeE.value = this.temp;
    }
  }
}
//@HostBinding('class.card-outline-primary') private ishovering: boolean;