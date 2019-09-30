import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from './car.service';
import { Router } from '@angular/router';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = {
    id : null,
    brand : null,
    model : null,
    year : 0,
    displacement : 0,
    description : null,
    photoPath : null

  };
  constructor(private _carService: CarService, private _router: Router) {

   }

  ngOnInit() {
  }
  saveCar(newCar : Car) : void {
    this._carService.save(this.car);
    this._router.navigate(['list']);
  }
}
