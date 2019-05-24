import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employee = [

      {
        name: 'Name12',
        lastName: "lastName12",
        pay: 5000000,
        birthDate: "12-12-1988",
        id: 12,
      },
      {
        name: 'Name12',
        lastName: "lastName12",
        pay: 5000000,
        birthDate: "12-12-1988",
        id: 13,
      },
    ];

    return {employee};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: any[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
