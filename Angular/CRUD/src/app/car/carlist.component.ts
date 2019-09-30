import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from './car.service';

@Component({
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  car : Car[];
  constructor(private _carService: CarService) { }

  ngOnInit() {
    this.car = this._carService.getCar();
  }

}
