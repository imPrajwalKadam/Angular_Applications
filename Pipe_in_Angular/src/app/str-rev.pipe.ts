import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strRev'
})
export class StrRevPipe implements PipeTransform {

  transform(value: any,...args:any): any
  {
    let temp:any = '';
    
    temp = value.split("").reverse().join("");

    
    return temp
  }
}
