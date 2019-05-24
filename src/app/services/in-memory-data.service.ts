import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employee = [
      {
        name: 'Diego',
        lastName: 'Hincapie',
        pay: 5000000,
        birthDate: '2018-12-30',
        id: 12,
      },
      {
        name: 'Felipe',
        lastName: 'Mape',
        pay: 5000000,
        birthDate: '1988-12-04',
        id: 13,
      },
      {
        name: 'Felipe',
        lastName: 'Martinez',
        pay: 600000,
        birthDate: '2018-12-30',
        id: 14,
      },
      {
        name: 'Diego',
        lastName: 'Alejandro',
        pay: 6999000,
        birthDate: '1988-08-25',
        id: 15,
      },
    ];

    return {employee};
  }

  genId(employees: any[]): number {
    // tslint:disable-next-line:no-shadowed-variable
    return employees.length > 0 ? Math.max(...employees.map( employees => employees.id)) + 1 : 11;
  }
}
