import { RouterModule, Routes } from '@angular/router';
import { MaterialsComponent } from './materials.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule {}
