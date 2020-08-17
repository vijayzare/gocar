import { StractureService } from './../../Service/stracture.service';
import { Component, OnInit } from '@angular/core';
import { Stracture } from 'src/app/Model/Stracture';

@Component({
  selector: 'app-stracure',
  templateUrl: './stracure.component.html',
  styleUrls: ['./stracure.component.css'],
})
export class StracureComponent implements OnInit {
  stractures: Stracture[];
  constructor(private stractureService: StractureService) {}

  ngOnInit(): void {
    this.getStracture();
  }

  getStracture() {
    this.stractureService.getStracture().subscribe(
      (data) => {
        console.log(data);
        this.stractures = data._embedded.stractures;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
