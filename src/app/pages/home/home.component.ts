import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EdgalaxyService } from '../../providers/edgalaxy.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  selected = model<Date | null>(null);

  valor1: number = 0;

  valor2: number = 0;

  result: number = 0;

  textoDelNico: string = "Tus putos corchetes pesado{}"

  edgalaxyDataTable: string = "";

  constructor(private __edgalaxyService: EdgalaxyService) { 
    this.getEdgalaxyData();
   }

  getEdgalaxyData(): void {
    /* fetch("/edgalaxy/hge")
    .then((res: any)=> {
      this.edgalaxyDataTable = res;
      //console.log(res.text())
    }) */
    /* this.__edgalaxyService.__edgalaxyHge2().subscribe((res: any)=>{
      console.log("<<<__edgalaxyHge2>>>")
      console.log(res);
    }); */
    /* this.__edgalaxyService.__edgalaxyHge().subscribe((data: any) => {
      this.edgalaxyDataTable = data;
      console.log(data)
    }); */
  }
  
}
