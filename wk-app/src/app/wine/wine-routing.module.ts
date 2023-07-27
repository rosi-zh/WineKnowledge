import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineAllComponent } from './wine-all/wine-all.component';

const routes: Routes = [
  {
    path: 'wines',
    component: WineAllComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
