import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FleetcarriersComponent } from './fleetcarriers.component';
import { FleetcarriersRoutingModule } from './fleetcarriers-routing.module';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [FleetcarriersComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FleetcarriersRoutingModule,

    TableModule,
    CardModule
  ]
})
export class FleetcarriersModule { }
