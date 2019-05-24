import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Employee } from '../../../../models/employee';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public isEditing: boolean;
  test2: FormGroup;


  @Input() employee: Employee;
  @Output() employeeEmitter = new EventEmitter<any>();

  @Output() employeeId = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
    this.isEditing = false;
  }

  displayMenuEdit() {
    this.isEditing = !this.isEditing;
  }

  sendEmployeeReq(val){
    this.employeeEmitter.emit(val);
  }

  deleteEmployeeReq(id) {
    this.employeeId.emit(id);
  }


}
