import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarService {
    private listCar: Car[] = [
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
          id: 3,
          brand: 'Subaru',
          model: 'BRZ',
          year: 2019,
          displacement: 4,
          description: 'The new super cheap car.',
          photoPath: 'assets/images/brz.jpg',
    
        },
      ];
    getCars(): Car[] {
        return this.listCar;
    }
    getCar(id: number): Car {
      return this.listCar.find(e => e.id === id);
  }
  save(car: Car){
    if(car.id === null){
      const maxid = this.listCar.reduce(function(e1, e2){
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      car.id = maxid + 1 ;
      this.listCar.push(car);
    } else {
      const foundIndex = this.listCar.findIndex(e => e.id === car.id);
      this.listCar[foundIndex] = car;
    }
  }

  deleteCar(id: number){
    const i = this.listCar.findIndex(e => e.id === id);
    if(i !== -1){
      this.listCar.splice(i, 1);
    }
  }
}