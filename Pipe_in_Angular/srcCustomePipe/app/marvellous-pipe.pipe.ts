import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousPipe'
})
export class MarvellousPipePipe implements PipeTransform {

  transform(value: any, ...args:any): any 
  {
    let str:any = value;
    let iNo1:any = 11;
    let iNo2:any = 21;
    let Addition:any = iNo1+iNo2;

    if(args[0] == "Marvellous")
    {
      str += "Educating for better tomorrow" 
    }
    if(args[1]== "Infosystems")
    {
      str += args[0].length;
    }
    return str;
  }
}
