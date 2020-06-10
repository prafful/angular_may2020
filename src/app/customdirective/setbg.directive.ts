import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetbg]'
})
export class SetbgDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.background ='goldenrod'
   }

}
