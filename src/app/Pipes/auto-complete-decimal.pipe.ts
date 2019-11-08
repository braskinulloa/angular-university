import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoCompleteDecimal'
})
export class AutoCompleteDecimalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
