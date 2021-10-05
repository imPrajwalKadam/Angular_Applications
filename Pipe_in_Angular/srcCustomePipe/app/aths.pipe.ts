import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aths'
})
export class AthsPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    let iNo1 = value;

    return iNo1.length;
  }

}
