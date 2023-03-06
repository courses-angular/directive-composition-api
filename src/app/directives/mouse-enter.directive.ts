import { Directive } from '@angular/core';
import {ChangeColorDirective} from './change-color.directive';
import {ChangeFontDirective} from './change-font.directive';

@Directive({
  selector: '[appMouseEnter]',
  standalone: true,
  hostDirectives: [ChangeFontDirective,{
    directive: ChangeColorDirective,
    inputs: ['color'],
  }]
})
export class MouseEnterDirective {

  constructor() { }

}
