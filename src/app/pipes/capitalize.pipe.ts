import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(args);
    // return value.charAt(0).toUpperCase() + value.substr(1);
    const words = value.split(' ');
    let stringRes = '';
    for (const word in words) {
      const low = words[word].toLowerCase();
      stringRes += low.charAt(0).toUpperCase() + low.substr(1) + ' ';
      // console.log(low.charAt(0).toUpperCase() + low.substr(1));
    }
    return stringRes;
  }

}
