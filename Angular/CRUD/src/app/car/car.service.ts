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
          id: 2,
          brand: 'Subaru',
          model: 'BRZ',
          year: 2019,
          displacement: 4,
          description: 'The new super cheap car.',
          photoPath: 'assets/images/brz.jpg',
    
        },
      ];
    getCar(): Car[] {
        return this.listCar;
    }

    save(car: Car){
        this.listCar.push(car);
    }
}