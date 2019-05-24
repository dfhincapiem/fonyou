import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEmployeeComponent } from './modal-create-employee.component';

describe('ModalCreateEmployeeComponent', () => {
  let component: ModalCreateEmployeeComponent;
  let fixture: ComponentFixture<ModalCreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
