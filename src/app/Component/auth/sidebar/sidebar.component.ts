import { StractureService } from './../../../Service/stracture.service';
import { Trip } from './../../../Model/trip.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  trips: Trip[];
  constructor(private stractureService: StractureService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips() {
    this.stractureService.getTrips().subscribe(
      (data) => {
        console.log(data);
        this.trips = data._embedded.trips;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
