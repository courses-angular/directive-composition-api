import { Component } from '@angular/core';
import {CdkMenuItem} from '@angular/cdk/menu';

@Component({
  selector: 'app-cdk-menu-item',
  templateUrl: './cdk-menu-item.component.html',
  styleUrls: ['./cdk-menu-item.component.scss'],
  standalone: true,
  hostDirectives: [{
    directive: CdkMenuItem,
    inputs:['cdkMenuItemDisabled: disabled']
  }]
})
export class CdkMenuItemComponent {

}
