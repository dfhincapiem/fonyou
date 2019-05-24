import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Employee } from '../../app/models/employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root',
})


export class EmployeesService {
  apiUrl = environment.apiRoot+'employee/employee';
  //private handleError: HandleError;

  constructor(private http: HttpClient) {
    console.log("API ROOT: ", this.apiUrl);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
      .pipe(
        //catchError(this.handleError('getHeroes', []))
      );
  }


  createEmployee (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions)
      .pipe(
        //catchError(this.handleError('addHero', hero))
      );
  }

  deleteEmployee (id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        //catchError(this.handleError('deleteHero'))
      );
  }

  updateEmployee (employee: Employee): Observable<Employee> {


    return this.http.put<Employee>(this.apiUrl, employee, httpOptions)
      .pipe(
        //catchError(this.handleError('updateHero', hero))
      );
  }
}

