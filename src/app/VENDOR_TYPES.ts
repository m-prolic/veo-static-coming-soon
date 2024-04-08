export interface VendorType {
  vendorTypeId: number;
  vendorTypeName: string;
  normalizedName: string;
  vendorTypeKey: string;
  rowOrder?: number;
}

export const VENDOR_TYPES: ReadonlyArray<VendorType> = [
  {
    vendorTypeId: 1,
    vendorTypeName: 'Fotografi',
    vendorTypeKey: 'photographer',
    normalizedName: 'fotografi',
    rowOrder: 3,
  },
  {
    vendorTypeId: 2,
    vendorTypeName: 'Videografi',
    vendorTypeKey: 'videographer',
    normalizedName: 'videografi',
    rowOrder: 22,
  },
  {
    vendorTypeId: 3,
    vendorTypeName: 'Saloni lepote',
    vendorTypeKey: 'beauty_salons',
    normalizedName: 'saloni-lepote',
    rowOrder: 22,
  },
  {
    vendorTypeId: 4,
    vendorTypeName: 'Dekoracija',
    vendorTypeKey: 'decorators',
    normalizedName: 'dekoracija',
    rowOrder: 4,
  },
  {
    vendorTypeId: 5,
    vendorTypeName: 'Restorani',
    vendorTypeKey: 'venue',
    normalizedName: 'restorani',
    rowOrder: 1,
  },
  {
    vendorTypeId: 6,
    vendorTypeName: 'Organizatori venčanja',
    vendorTypeKey: 'wedding_planner',
    normalizedName: 'organizatori-vencanja',
    rowOrder: 22,
  },
  {
    vendorTypeId: 7,
    vendorTypeName: 'Bendovi i DJ',
    vendorTypeKey: 'music',
    normalizedName: 'muzika',
    rowOrder: 2,
  },
  {
    vendorTypeId: 8,
    vendorTypeName: 'Poslastičarnice',
    vendorTypeKey: 'cakes',
    normalizedName: 'svadbena-torta-poslasticarnice',
    rowOrder: 22,
  },
  {
    vendorTypeId: 9,
    vendorTypeName: 'Ketering',
    vendorTypeKey: 'catering',
    normalizedName: 'ketering',
    rowOrder: 22,
  },
  {
    vendorTypeId: 10,
    vendorTypeName: 'Bar servisi',
    vendorTypeKey: 'bar_service',
    normalizedName: 'bar-servisi',
    rowOrder: 22,
  },
  {
    vendorTypeId: 11,
    vendorTypeName: 'Zlatare',
    vendorTypeKey: 'jewelry',
    normalizedName: 'burme-verenicko-zlatare',
    rowOrder: 6,
  },
  {
    vendorTypeId: 12,
    vendorTypeName: 'Pozivnice',
    vendorTypeKey: 'invitation',
    normalizedName: 'pozivnice',
    rowOrder: 22,
  },
  {
    vendorTypeId: 13,
    vendorTypeName: 'Krojači i kreatori',
    vendorTypeKey: 'butique',
    normalizedName: 'vencanice-krojaci-haljine-odela',
    rowOrder: 22,
  },
  {
    vendorTypeId: 14,
    vendorTypeName: 'Zabava',
    vendorTypeKey: 'party_vendors',
    normalizedName: 'specijalni-efekti-zabava',
    rowOrder: 22,
  },
  {
    vendorTypeId: 15,
    vendorTypeName: 'Transport',
    vendorTypeKey: 'transport',
    normalizedName: 'transport-limuzine',
    rowOrder: 22,
  },
  {
    vendorTypeId: 16,
    vendorTypeName: 'Vikendice',
    vendorTypeKey: 'weekend_houses',
    normalizedName: 'momacko-devojacko-vece',
    rowOrder: 22,
  },
  {
    vendorTypeId: 17,
    vendorTypeName: 'Smeštaj za goste',
    vendorTypeKey: 'guest_hotels',
    normalizedName: 'smestaj-za-goste',
    rowOrder: 22,
  },
  {
    vendorTypeId: 18,
    vendorTypeName: 'Medeni mesec',
    vendorTypeKey: 'travel_specialists',
    normalizedName: 'medeni-mesec',
    rowOrder: 22,
  },
  {
    vendorTypeId: 19,
    vendorTypeName: 'Časovi plesa',
    vendorTypeKey: 'dance_lessons',
    normalizedName: 'casovi-za-prvi-ples',
    rowOrder: 22,
  },
  {
    vendorTypeId: 20,
    vendorTypeName: 'Pokloni',
    vendorTypeKey: 'gifts_favors',
    normalizedName: 'pokloni-i-kicenje',
    rowOrder: 22,
  },
  {
    vendorTypeId: 21,
    vendorTypeName: 'Iznajmljivanje',
    vendorTypeKey: 'rentals',
    normalizedName: 'iznajmljivanje',
    rowOrder: 22,
  },
  {
    vendorTypeId: 22,
    vendorTypeName: 'Cvećare',
    vendorTypeKey: 'florists',
    normalizedName: 'cvecare',
    rowOrder: 5,
  },
];
