import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-modal-create-employee',
  templateUrl: './modal-create-employee.component.html',
  styleUrls: ['./modal-create-employee.component.scss']
})


export class ModalCreateEmployeeComponent {

  closeResult: string;

  @Output() newEmployeeEmitter = new EventEmitter<any>();

  constructor(private modalService: NgbModal, private employeesService: EmployeesService) {}

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

  test(){
    this.emplo
    this.modalService.dismissAll();
  }

}
