import { Observable } from 'rxjs';
import { Place, Car } from './../../Model/Place';
import { StractureService } from './../../Service/stracture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridcar',
  templateUrl: './gridcar.component.html',
  styleUrls: ['./gridcar.component.css'],
})
export class GridcarComponent implements OnInit {
  places: Place[];
  placess: Observable<Place[]>;
  cars: Observable<Car[]>;
  constructor(private stractureService: StractureService) {}

  ngOnInit(): void {
    //    this.getPalceAndCar();
    this.cars = this.stractureService.getCar();
    this.placess = this.stractureService.getLocation();
  }

  getPalceAndCar() {
    this.stractureService.getCarsAndPlace().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
