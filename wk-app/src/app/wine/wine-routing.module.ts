import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineAllComponent } from './wine-all/wine-all.component';
import { WineAddComponent } from './wine-add/wine-add.component';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { WineEditComponent } from './wine-edit/wine-edit.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'wines',
    component: WineAllComponent
  },
  {
    path: 'wines/add',
    canActivate: [AuthGuard],
    component: WineAddComponent
  },
  {
    path: 'wines/:wineId',
    component: WineDetailsComponent
  },
  {
    path: 'wines/edit/:wineId',
    component: WineEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
