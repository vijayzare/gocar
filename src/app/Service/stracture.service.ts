import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StractureResponce } from '../Model/Stracture';
import { Place } from './../Model/Place';
import { TripResponce } from './../Model/trip.model';

@Injectable({
  providedIn: 'root',
})
export class StractureService {
  baseUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) {}

  getTrips() {
    return this.httpClient.get<TripResponce>(this.baseUrl + 'trips');
  }
  getStracture() {
    return this.httpClient.get<StractureResponce>(this.baseUrl + 'stractures');
  }

  getCarsAndPlace() {
    return this.httpClient.get<Place>('http://localhost:8080/api/v1');
  }
  getLocation(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/v1');
  }
  getCar(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/v2');
  }
}
