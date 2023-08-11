import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineAllComponent } from './wine-all/wine-all.component';
import { WineRoutingModule } from './wine-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WineAddComponent } from './wine-add/wine-add.component';
import { FormsModule } from '@angular/forms';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { WineEditComponent } from './wine-edit/wine-edit.component';


@NgModule({
  declarations: [
    WineAllComponent,
    WineAddComponent,
    WineDetailsComponent,
    WineEditComponent,
  ],
  imports: [
    CommonModule,
    WineRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    WineAllComponent
  ]
})
export class WineModule { }
