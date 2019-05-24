import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fonyou';

  constructor() {}

  ngOnInit() {


    // setTimeout(

    //   ()=>{this.employeesService.addHero(
    //     {id: 99, name: "Diego", lastName: "lastName", birthDate: "10-10-1990", pay: 100000}
    //     ).subscribe(
    //     (data) => console.log("DATA: ", data)
    //   )}, 5000);

    // setTimeout(

    // ()=>{this.employeesService.getEmployees().subscribe(
    //   (data) => console.log("DATA: ", data)
    // )}, 5000);


    // const newHero: Employee = {id: 11, name: "Diego", lastName: "lastName", birthDate: "10-10-1980", pay: 500000} as Employee;
    // setTimeout(

    //   ()=>{this.employeesService.updateHero(
    //       newHero
    //     ).subscribe(
    //   )}, 5000);


    // setTimeout(

    //   ()=>{this.employeesService.getEmployees().subscribe(
    //     (data) => console.log("DATA: ", data)
    //   )}, 5000);

  }
}

