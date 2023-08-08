import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineAllComponent } from './wine-all/wine-all.component';
import { WineAddComponent } from './wine-add/wine-add.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
