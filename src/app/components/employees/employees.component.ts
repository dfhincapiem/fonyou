import { Component, OnInit } from '@angular/core';

import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {

  public employees: Employee[];



  constructor(private employeeService: EmployeesService) {

  }

  ngOnInit() {
    this.getEmployees();




  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((val)=>{
      this.employees = val;
      console.log("DESDE EMPLOYEES", this.employees);
    });
  }


  test(){
    console.log("dsadas");
  }




}
