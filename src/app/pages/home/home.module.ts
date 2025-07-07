import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatCardModule, 
    MatDatepickerModule
  ]
})
export class HomeModule { }
