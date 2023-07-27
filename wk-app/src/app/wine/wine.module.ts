import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineAllComponent } from './wine-all/wine-all.component';
import { WineRoutingModule } from './wine-routing.module';


@NgModule({
  declarations: [
    WineAllComponent,
  ],
  imports: [
    CommonModule,
    WineRoutingModule
  ],
  exports: [
    WineAllComponent
  ]
})
export class WineModule { }
