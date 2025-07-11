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

  url: string = 'https://edgalaxy.net/hge';
  /**
   * Control Panel password
   * 244WjFcuX$
   * 
   * https://azure.microsoft.com/es-es/pricing/purchase-options/azure-account#free-services
   * Azure Cosmos DB for MongoDB
   * Azure DevOps
   * 
   * 
   */

  constructor(private __edgalaxyService: EdgalaxyService) { 
    /* this.getEdgalaxyData(); */
    fetch(this.url, {
      method: 'GET',
      mode: 'no-cors', // Necesario para solicitudes CORS
    })
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
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
