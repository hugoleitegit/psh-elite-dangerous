import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  constructor() {}
  getManufacturedMaterialsData() {
    return [
      {
        id: '1000',
        name: 'Core Dynamic Composites',
        systemAllegiance: 'Federation',
        factionState: 'Election | None',
      },
      {
        id: '1001',
        name: 'Military Grade Alloys',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'War | Civil War',
      },
      {
        id: '1002',
        name: 'Military Supercapacitators',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'War | Civil War',
      },
      {
        id: '1003',
        name: 'Improvised Components',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'Civil Unrest',
      },
      {
        id: '1004',
        name: 'Imperial Shielding',
        systemAllegiance: 'Imperial',
        factionState: 'Election | None',
      },
      {
        id: '1005',
        name: 'Farmaceutical Isolators',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'OutBreak',
      },
      {
        id: '1006',
        name: 'Proto Heat Radiators',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'Boom | None',
      },
      {
        id: '1007',
        name: 'Proto Radiolic Alloys',
        systemAllegiance: 'Independent or Alliance',
        factionState: 'Expansion | None',
      },
    ];
  }

  getRawMaterialsData() {
    return [
      {
        id: '2000',
        name: 'Antimonio',
        locations: [
          {
            system: 'Outotz LS-K d8-3',
            body: 'B 5 C',
            radious: 0,
            coordinates: [
              {
                lat: -66.01,
                lng: 83.66,
              },
              {
                lat: -62.49,
                lng: 80.24,
              },
            ],
          },
        ],
      },
      {
        id: '2001',
        name: 'Ytrio',
        locations: [
          {
            system: 'Outotz LS-K d8-3',
            body: 'B 5 A',
            radious: 0,
            coordinates: [
              {
                lat: 16.79,
                lng: -40.13,
              },
              {
                lat: -1.83,
                lng: -145.69,
              },
              {
                lat: -1.92,
                lng: -145.70,
              },
            ],
          },
        ],
      },
      {
        id: '2002',
        name: 'Polonio',
        locations: [
          {
            system: 'HIP 36601',
            body: 'C 1 A',
            radious: 0,
            coordinates: [
              {
                lat: 36.9282,
                lng: -75.2796,
              },
              {
                lat: -31.03,
                lng: 14.85,
              },
              {
                lat: -57.46,
                lng: 126.95,
              },
            ],
          },
        ],
      },
      {
        id: '2003',
        name: 'Rutenio',
        locations: [
          {
            system: 'HIP 36601',
            body: 'C 1 D',
            radious: 0,
            coordinates: [
              {
                lat: 7.24,
                lng: -37.66,
              },
              {
                lat: 10.70,
                lng: -35.75,
              },
              {
                lat: -51.26,
                lng: 14.73,
              },
            ],
          },
        ],
      },
      {
        id: '2004',
        name: 'Tecnecio',
        locations: [
          {
            system: 'HIP 36601',
            body: 'C 5 A',
            radious: 0,
            coordinates: [
              {
                lat: 6.82,
                lng: -23.81,
              },
              {
                lat: 6.87,
                lng: -22.99,
              },
              {
                lat: 3.55,
                lng: -55.18,
              },
            ],
          },
        ],
      },
      {
        id: '2005',
        name: 'Teluro',
        locations: [
          {
            system: 'HIP 36601',
            body: 'C 3 B',
            radious: 0,
            coordinates: [
              {
                lat: 36.88,
                lng: -75.51,
              },
              {
                lat: -17.68,
                lng: -55.18,
              },
            ],
          },
        ],
      },
      {
        id: '2007',
        name: 'Selenio',
        locations: [
          {
            system: '	Kappa-1 Volantis',
            body: 'B 3 F A',
            radious: 0,
            coordinates: [
              {
                lat: -50.1757,
                lng: -112.2340,
              },
              {
                lat: -50.2105,
                lng: -111.9912,
              },
            ],
          },
          {
            system: 'HR 3230',
            body: '3 A A',
            radious: 0,
            coordinates: [
              {
                lat: 45.66,
                lng: -30.49,
              },
              {
                lat: 33.0879,
                lng: -116.9039,
              },
            ],
          },
        ],
      },
    ];
  }
  getRawMaterialsCommunityData() {
    return [
      {
        id: '2000',
        name: 'Antimonio',
        locations: [
          {
            system: '35 G. Carinae',
            body: '1 E',
            radious: 0,
            indications: '25km Away - Fly Towards 180*',
          },
        ],
      },
      {
        id: '2001',
        name: 'Ytrio',
        locations: [
          {
            system: '35 G. Carinae',
            body: '2 D',
            radious: 0,
            indications: '25km Away - Fly Towards 0*',
          },
        ],
      },
      {
        id: '2002',
        name: 'Polonio',
        locations: [
          {
            system: 'Synuefe AA-P c22-7',
            body: '5 C',
            radious: 0,
            indications: '25km Away - Fly Towards 180*',
          },
        ],
      },
      {
        id: '2003',
        name: 'Rutenio',
        locations: [
          {
            system: '35 G. Carinae',
            body: '2 C',
            radious: 0,
            indications: '25km Away - Fly Towards 90*',
          },
        ],
      },
      {
        id: '2004',
        name: 'Tecnecio',
        locations: [
          {
            system: '35 G. Carinae',
            body: '2 A',
            radious: 0,
            indications: '25km Away - Fly Towards 90*',
          },
        ],
      },
      {
        id: '2005',
        name: 'Teluro',
        locations: [
          {
            system: 'Synuefe SE-V b49-4',
            body: '2 C',
            radious: 0,
            indications: '25km Away - Fly Towards 90*',
          },
        ],
      },
      {
        id: '2005',
        name: 'Selenio',
        locations: [
          {
            system: 'Synuefe SE-V b49-4',
            body: 'B 3 A',
            radious: 0,
            indications: '195km Away - Fly Towards 0*',
          },
        ],
      },
    ];
  }


  getManufacturedMaterialsMini() {
    return Promise.resolve(this.getManufacturedMaterialsData().slice(0, 5));
  }

  getManufacturedMaterialsSmall() {
    return Promise.resolve(this.getManufacturedMaterialsData().slice(0, 10));
  }

  getManufacturedMaterials() {
    return Promise.resolve(this.getManufacturedMaterialsData());
  }

  getRawMaterialsMini() {
    return Promise.resolve(this.getRawMaterialsData().slice(0, 5));
  }

  getRawMaterialsSmall() {
    return Promise.resolve(this.getRawMaterialsData().slice(0, 10));
  }

  getRawMaterials() {
    return Promise.resolve(this.getRawMaterialsData());
  }

  getRawMaterialsCommunity() {
    return Promise.resolve(this.getRawMaterialsCommunityData());
  }

  getRawMaterialsCommunityMini() {
    return Promise.resolve(this.getRawMaterialsCommunityData().slice(0, 5));
  }

  getRawMaterialsCommunitySmall() {
    return Promise.resolve(this.getRawMaterialsCommunityData().slice(0, 10));
  }
}
