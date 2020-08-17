export interface Place {
  id: number;
  location: string;
  cars?: Car[] | null;
}

export interface Car {
  id: number;
  carType: string;
  carName: string;
  sets: number;
  imageUrl: string;
  perKm: number;
}
