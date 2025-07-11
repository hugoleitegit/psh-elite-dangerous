export interface RawMaterial {
        id: string;
        name: string;
        locations: Array<{
            system: string;
            body: string;
            radious: number;
            coordinates?: Array<{
                lat: number;
                lng: number;
            }>;
            indications?: string;
        }>;
      }