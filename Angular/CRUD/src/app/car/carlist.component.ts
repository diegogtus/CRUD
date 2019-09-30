import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  car: Car[] = [
    {
      id: 1,
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2019,
      displacement: 4,
      description: 'The main character of transformers.',
      photoPath: 'assets/images/camaro.jpg',

    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mustang',
      year: 2019,
      displacement: 4,
      description: 'The bad guy of Transformers.',
      photoPath: 'assets/images/mustang.jpg',

    },
    {
      id: 2,
      brand: 'Subaru',
      model: 'BRZ',
      year: 2019,
      displacement: 4,
      description: 'The new super cheap car.',
      photoPath: 'assets/images/brz.jpg',

    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
