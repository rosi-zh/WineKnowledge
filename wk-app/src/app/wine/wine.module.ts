import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineAllComponent } from './wine-all/wine-all.component';
import { WineRoutingModule } from './wine-routing.module';
import { WineComponent } from './wine/wine.component';



@NgModule({
  declarations: [
    WineAllComponent,
    WineComponent
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
