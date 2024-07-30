import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Fiesta',
    },
  ];

  public findAll() {
    return this.cars;
  }
}
