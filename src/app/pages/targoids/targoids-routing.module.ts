import { RouterModule, Routes } from '@angular/router';
import { TargoidsComponent } from './targoids.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: TargoidsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargoidsRoutingModule {}
