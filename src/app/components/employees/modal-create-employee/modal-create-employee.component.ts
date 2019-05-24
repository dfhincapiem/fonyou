import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-modal-create-employee',
  templateUrl: './modal-create-employee.component.html',
  styleUrls: ['./modal-create-employee.component.scss']
})

export class ModalCreateEmployeeComponent {

  public closeResult: string;

  public employeeDataForm: FormGroup;

  public isFormValid: boolean;

  @Output() newEmployeeEmitter = new EventEmitter<any>();

  constructor(  private modalService: NgbModal, private employeesService: EmployeesService, private formGroup: FormBuilder) {
                      this.employeeDataForm = this.formGroup.group({
                        name: ['', Validators.required ],
                        lastName: ['', Validators.required ],
                        pay: ['', Validators.required ],
                        birthDate: ['', Validators.required ],
                    });
                      this.isFormValid = true;

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitForm(employeeDataForm: FormGroup) {
    this.isFormValid = true;
    if (employeeDataForm.invalid) {
      this.isFormValid = false;
      return;
    }
    const newEmployeeData = employeeDataForm.value as Employee;
    this.createEmployeeReq(newEmployeeData);
  }

  createEmployeeReq(employee: Employee) {

    this.employeesService.createEmployee(employee).subscribe(
      () => {
        this.employeesService.getEmployees().subscribe(
          (val) => {
            this.newEmployeeEmitter.emit();
            this.modalService.dismissAll();
          }
        );
      }
    );
  }

}
