import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: any;

  constructor(
    private ps: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.ps.getAll().subscribe(
      data => {
        return this.products = data;
      },
      error => console.log(error),
    );
  }

  onDelete(id:any) {
    this.ps.delete(id).subscribe(
      data=>this.handleResponse(data),
      error=>console.log(error)
    );
  }

  handleResponse(data: any){
    console.log(data)
  }
}
