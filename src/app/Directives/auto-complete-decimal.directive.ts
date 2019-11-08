import { Directive, ElementRef /*Para usar el elemento html*/, HostListener /*Para los eventos del DOM*/, Input /*Permite traer variables*/} from '@angular/core';

@Directive({
  selector: '[appAutoCompleteDecimal]'
})

export class AutoCompleteDecimalDirective {
  temp: string;
  el: any;
  cursor: any;
  constructor(el: ElementRef) {
    this.el = el;
  }
  @Input() language: string;
  @Input() numDecimals: number;
  @Input() isPercent: string;
  
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    switch (event.key){
      case 'Enter': {
        this.convertNumber(this.el.nativeElement);
        break;
      }
      case 'Tab': {
        this.convertNumber(this.el.nativeElement);
        break;      
      }
    }
  }
  convertNumber(nativeE: any){
    let decimals = '';
    let tempSplit = [];
    this.temp = nativeE.value.replace(/[^0-9,.\.]/g, ''); //Solo deja núeros y ,.    
    tempSplit = this.temp.split('.'); //Array dividido por .
    if(tempSplit.length >= 2){//en caso que exista más de un . solo toma como decimales a partir del último
      this.temp = '';
      for(let i=0;i<tempSplit.length;i++){
        
        if(tempSplit.length == 1){
          this.temp+=tempSplit[i];
        }else if(i < tempSplit.length-1){
          this.temp+=tempSplit[i];
        }
      }
      decimals = tempSplit[tempSplit.length-1];
    }
    for(;decimals.length<this.numDecimals;){ decimals = decimals+'0'} //Suma el resto de 0s
    
    let objvals: any = {};//Objeto con la configuración del Intl.NumberFormat
    objvals.style = 'decimal';
    objvals.minimumFractionDigits = this.numDecimals;
    
    if(isNaN(parseFloat(this.temp))){
      this.el.nativeElement.value = '';
      return null;
    }
    
    this.temp = this.temp.replace(/[^0-9\.]/g, '');
    this.temp = new Intl.NumberFormat(this.language, objvals).format(parseFloat(this.temp)); // parseFloat();
 
    if(this.temp.length == (parseInt(this.numDecimals+'')+5)){ // los miles de un millar digamos 1544 no mostraba la , del mil
      this.temp =  this.temp.substr(0, 1) + ',' +  this.temp.substr(1, this.temp.length);
    }
    this.temp = this.temp.substr(0, this.temp.length-this.numDecimals) + decimals.substr(0 , this.numDecimals);
    console.log('%' + this.isPercent +'%');
    
    nativeE.value = this.isPercent == 'true'?this.temp+' %':this.temp;
    // nativeE.selectionStart = nativeE.value.lenght;
    // nativeE.selectionEnd = nativeE.value.lenght;
  }
}
