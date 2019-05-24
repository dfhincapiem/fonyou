import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../../../models/employee';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  @Input() employees: Employee[];

  @Output() getEmployeesEmitter = new EventEmitter<any>();

  hasFormError: boolean;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.hasFormError = false;
  }

  putEmployeeReq(employee: Employee) {
    this.hasFormError = false;
    if (employee.name.length < 1 || employee.lastName.length < 1 || employee.pay <= 0 || employee.birthDate.length < 1 ) {
      this.hasFormError = true;
      setTimeout(() => {this.hasFormError = false; }, 5000);
    }
    this.employeesService.updateEmployee(employee).subscribe( (val) => {
      this.employeesService.getEmployees().subscribe(
         () => {
            this.updateEmployeeData();
          }
        );
      });
  }

  deleteEmployeeReq(employeeId) {
    this.employeesService.deleteEmployee(employeeId).subscribe(() => {
      this.updateEmployeeData();
    });
  }

  updateEmployeeData() {
    this.getEmployeesEmitter.emit();
  }


}
