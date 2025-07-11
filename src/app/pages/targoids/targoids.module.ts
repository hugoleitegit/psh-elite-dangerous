import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TargoidsComponent } from './targoids.component';
import { TargoidsRoutingModule } from './targoids-routing.module';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [TargoidsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TargoidsRoutingModule,
    MatCardModule,

    CardModule
  ]
})
export class TargoidsModule { }
