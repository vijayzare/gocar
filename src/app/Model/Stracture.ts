export interface StractureResponce {
  _embedded: Embedded;
}

// tslint:disable-next-line: no-empty-interface
export interface Embedded {
  stractures?: Stracture[] | null;
}
export interface Stracture {
  id: number;
  category: string;
  name: string;
  discription: string;
  sets: number;
  pricePerKm: number;
}
