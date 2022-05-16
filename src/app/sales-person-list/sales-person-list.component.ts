import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Luke", "Rodzynek","luke.rodzynek@hipiti.com",9000000),
    new SalesPerson("Adam", "Kowalski","adam.kowalski@hipiti.com",400000),
    new SalesPerson("Eve", "Michalski","eve.michalski@hipiti.com",2400000),
    new SalesPerson("Bob", "Łąka","bob.laka@hipiti.com",8100000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
