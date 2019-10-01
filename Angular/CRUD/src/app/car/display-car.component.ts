import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/car.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.css']
})
export class DisplayCarComponent implements OnInit { private selectedEmployeeId: number;
  @Input() car: Car;

  constructor(private _route: ActivatedRoute, private _router: Router) { }
 
  ngOnInit() {
  }
  editCar(){
    this._router.navigate(['/edit', this.car.id]), {
      
    }
  }

}
