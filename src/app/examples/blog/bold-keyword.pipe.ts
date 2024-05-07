import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldKeyword'
})
export class BoldKeywordPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const splitIndex = value.indexOf(':');
    
    if (splitIndex !== -1) {
      const keyword = value.substring(0, splitIndex);
      const restOfText = value.substring(splitIndex + 1);
      
      const boldKeyword = `<span style="font-weight: bold;">${keyword}</span>`;
      const transformedValue = boldKeyword + ': ' + restOfText;
      
      return this.sanitizer.bypassSecurityTrustHtml(transformedValue);
    }

    return value;
  }

}
