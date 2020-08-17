export interface TripResponce {
  _embedded: Embedded;
}

export interface Embedded {
  trips?: Trip[] | null;
}

export interface Trip {
  id: number;
  tripName: string;
  serviceProvider: string;
}
