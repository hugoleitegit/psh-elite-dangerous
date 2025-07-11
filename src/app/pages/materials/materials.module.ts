import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MaterialsRoutingModule,

    TableModule,
    CardModule
  ]
})
export class MaterialsModule { }
