import { RouterModule, Routes } from '@angular/router';
import { FleetcarriersComponent } from './fleetcarriers.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: FleetcarriersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetcarriersRoutingModule {}
