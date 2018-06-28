import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlackWhiteColor]'
})
export class BlackWhiteColorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.backgroundColor = 'black';
  }

}
