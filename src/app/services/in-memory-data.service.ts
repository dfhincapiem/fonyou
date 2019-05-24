import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {



  createDb() {
    const heroes = [
      // { id: 11,
      //   name: 'Name11',
      //   lastName: "lastName11",
      //   birthDate: "1990-11-27",
      //   pay: 5000000

      // },
      { id: 12,
        name: 'Name12',
        lastName: "lastName12",
        birthDate: "12-12-1988",
        pay: 5000000

      },
      { id: 13,
        name: 'Name13',
        lastName: "lastName13",
        birthDate: "11-12-1950",
        pay: 5000000

      },
      { id: 14,
        name: 'Name14',
        lastName: "lastName14",
        birthDate: "11-12-1950",
        pay: 5000000

      }
    ];

    return {heroes};
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
