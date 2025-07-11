import { Component } from '@angular/core';
import { MaterialsService } from '../../providers/materials/materials.service';
import { ManufacturedMaterial } from '../../interfaces/manufacturedMaterial/manufactured-material';
import { RawMaterial } from '../../interfaces/rawMaterial/raw-material';

@Component({
  selector: 'app-materials',
  standalone: false,
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent {
  manufacturedMaterials!: ManufacturedMaterial[];
  rawMaterials!: RawMaterial[];
  rawMaterialsCommunity!: RawMaterial[];

    constructor(private materialsService: MaterialsService) {}

    ngOnInit() {
        this.materialsService.getManufacturedMaterials().then((data) => {
            this.manufacturedMaterials = data;
        });
        this.materialsService.getRawMaterials().then((data) => {
            this.rawMaterials = data;
        });
        this.materialsService.getRawMaterialsCommunity().then((data) => {
            this.rawMaterialsCommunity = data;
        });
    }
}
