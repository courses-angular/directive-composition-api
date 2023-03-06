import { Component } from '@angular/core';
import {CdkMenu} from '@angular/cdk/menu';

@Component({
  selector: 'app-cdk-menu',
  templateUrl: './cdk-menu.component.html',
  styleUrls: ['./cdk-menu.component.scss'],
  standalone: true,
  hostDirectives:[CdkMenu]
})
export class CdkMenuComponent {

}
