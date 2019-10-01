import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from './car.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit{
  car : Car[];

  
  constructor(private _carService: CarService, private _router: Router) { 

  }

  ngOnInit() {
    this.car = this._carService.getCars();
  }
 

}
