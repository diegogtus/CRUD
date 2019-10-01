import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './car.service';


@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.css']
})
export class DisplayCarComponent implements OnInit { private selectedEmployeeId: number;
  @Input() car: Car;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _carService: CarService) { }
 
  ngOnInit() {
  }
  editCar(){
    this._router.navigate(['/edit', this.car.id]);
  }
  deleteCar(){
    this._carService.deleteCar(this.car.id);
    this.notifyDelete.emit(this.car.id);
  }
}
