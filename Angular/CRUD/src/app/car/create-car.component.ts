import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from './car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car;
  constructor(private _carService: CarService, private _router: Router,
    private _route: ActivatedRoute) {

   }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getCar(id);
    });
  }
private getCar(id: number){
  if(id === 0){
    this.car = {
      id : null,
      brand : null,
      model : null,
      year : 0,
      displacement : 0,
      description : null,
      photoPath : null
  
    };
  } else{
    this.car = Object.assign({}, this._carService.getCar('id'));
  }
}

  saveCar(newCar : Car) : void {
    this._carService.save(this.car);
    this._router.navigate(['list']);
  }
}
