import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

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

  genId(employees: any[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employees => employees.id)) + 1 : 11;
  }
}
