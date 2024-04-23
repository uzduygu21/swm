import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldKeyword'
})
export class BoldKeywordPipe implements PipeTransform {

  transform(value: string): string {
    const splitIndex = value.indexOf(':');
    
    if (splitIndex !== -1) {
      const keyword = value.substring(0, splitIndex);
      const restOfText = value.substring(splitIndex + 1);
      
      return `<strong>${keyword}</strong>: ${restOfText}`;
    }
    return value;
  }

}
