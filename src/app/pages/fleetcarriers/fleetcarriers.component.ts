import { Component } from '@angular/core';

@Component({
  selector: 'app-fleetcarriers',
  standalone: false,
  templateUrl: './fleetcarriers.component.html',
  styleUrl: './fleetcarriers.component.scss',
})
export class FleetcarriersComponent {
  fleetCarriersCost: any[] = [
    {
      id: 'portanaves_base',
      name: 'Portanaves Base',
      installation: 5000000000,
      activeMaintenance: 5000000,
      suspendedMaintenance: 0,
    },
    {
      id: 'estacion_repostaje',
      name: 'Estación de repostaje',
      installation: 40000000,
      activeMaintenance: 1500000,
      suspendedMaintenance: 750000,
    },
    {
      id: 'equipos_reparacion',
      name: 'Equipos de reparación',
      installation: 50000000,
      activeMaintenance: 1500000,
      suspendedMaintenance: 750000,
    },
    {
      id: 'armeria',
      name: 'Armería',
      installation: 95000000,
      activeMaintenance: 1500000,
      suspendedMaintenance: 750000,
    },
    {
      id: 'oficina_canje',
      name: 'Oficina de canje',
      installation: 150000000,
      activeMaintenance: 1850000,
      suspendedMaintenance: 850000,
    },
    {
      id: 'astillero',
      name: 'Astillero',
      installation: 250000000,
      activeMaintenance: 6500000,
      suspendedMaintenance: 1800000,
    },
    {
      id: 'equipamiento',
      name: 'Equipamiento',
      installation: 250000000,
      activeMaintenance: 5000000,
      suspendedMaintenance: 1500000,
    },
    {
      id: 'almacen_contrabando',
      name: 'Almacén de contrabando',
      installation: 165000000,
      activeMaintenance: 2000000,
      suspendedMaintenance: 1250000,
    },
    {
      id: 'universal_cartographics',
      name: 'Universal cartograpfics',
      installation: 150000000,
      activeMaintenance: 1850000,
      suspendedMaintenance: 700000,
    },
    {
      id: 'bar_vestibulo',
      name: 'Bar del vestíbulo',
      installation: 200000000,
      activeMaintenance: 1750000,
      suspendedMaintenance: 1250000,
    },
    {
      id: 'vista_genomics',
      name: 'Vista genomics',
      installation: 150000000,
      activeMaintenance: 1500000,
      suspendedMaintenance: 700000,
    },
    {
      id: 'pioneer_supplies',
      name: 'Pioneer supplies',
      installation: 250000000,
      activeMaintenance: 5000000,
      suspendedMaintenance: 1500000,
    },
    {
      id: 'total',
      name: 'Total',
      installation: 6750000000,
      activeMaintenance: 34950000,
      suspendedMaintenance: 11800000,
    },
  ];
}
