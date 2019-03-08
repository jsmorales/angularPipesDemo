import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor( private _domSanitazer: DomSanitizer) {
  }
  transform(value: string, videoCode: string): any {
    return this._domSanitazer.bypassSecurityTrustResourceUrl(value + videoCode);
  }

}
