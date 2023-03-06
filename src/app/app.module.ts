import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {ChangeColorDirective} from './directives/change-color.directive';
import {ChangeFontDirective} from './directives/change-font.directive';
import {MouseEnterDirective} from './directives/mouse-enter.directive';
import { CdkMenuComponent } from './cdk-menu/cdk-menu.component';
import { CdkMenuItemComponent } from './cdk-menu/cdk-menu-item/cdk-menu-item.component';
import {MenuTriggerDirective} from './directives/menu-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeColorDirective,
    ChangeFontDirective,
    MouseEnterDirective,
    MenuTriggerDirective,
    CdkMenuItemComponent,
    CdkMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
