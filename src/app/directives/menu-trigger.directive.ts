import { Directive } from '@angular/core';
import {CdkMenuTrigger} from '@angular/cdk/menu';

@Directive({
  selector: '[appMenuTrigger]',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: menu']
    }
  ]
})
export class MenuTriggerDirective {

  constructor() { }

}
