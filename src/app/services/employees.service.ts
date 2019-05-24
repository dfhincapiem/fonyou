import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Employee } from '../../app/models/employee';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {

  // SET API-URL ADRESS

  private readonly apiUrl = environment.apiRoot + 'employee/employee';

  constructor(private http: HttpClient) {
    console.log('API ROOT: ', this.apiUrl);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
      .pipe();
  }


  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions)
      .pipe();
  }

  deleteEmployee(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe();
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl, employee, httpOptions)
      .pipe();
  }
}

