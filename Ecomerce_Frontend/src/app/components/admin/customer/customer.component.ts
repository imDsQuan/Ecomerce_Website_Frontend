import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers !: any;

  constructor(
    private cs: CustomerService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.cs.getAll().subscribe(
      value => {
        this.customers = value;
        console.log(this.customers);
      }
    )
  }

  onDelete(id : any) {
    this.cs.delete(id).subscribe(
      value => {
        this.getAll();
      }
    )
  }
}
