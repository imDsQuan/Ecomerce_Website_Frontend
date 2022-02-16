import { Component, OnInit } from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ProductService} from "../../../services/product.service";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  orderList: Product[] = [];

  searchProducts !: any;

  constructor(
    private ps : ProductService,
  ) { }

  ngOnInit(): void {
  }

  incrementValue($event: MouseEvent) {

  }

  decrementValue($event: MouseEvent) {

  }

  onSearchProduct(event : Event) {
    let searchData = document.querySelector(".search-data");
    // @ts-ignore
    if (event.target.value ){
      (searchData as HTMLElement).style.display = "block";
      // @ts-ignore
      this.ps.getProduct(event.target.value).pipe(
        debounceTime(1000), distinctUntilChanged())
        .subscribe(value => {
          // @ts-ignore
            this.searchProducts = value
        },
        error => console.log(error)
        );
    } else{
      (searchData as HTMLElement).style.display = "none";
    }
  }

  onSearchProductClick(product: any) {
    let ok = false;
    this.orderList.forEach(
      p => {
        if (p.id == product.id){
          p.quantity ++;
          ok = true;
        }
      }
    )
    product['quantity'] = 1;

    if (!ok) {
      product['quantity'] = 1;
      this.orderList.push(product);
    }
    console.log(this.orderList);
    let searchData = document.querySelector(".search-data");
    (searchData as HTMLElement).style.display = "none";
  }

  addQuantity(id: any) {
    let index = -1;
    for (let i = 0; i < this.orderList.length; i++){
      if (this.orderList[i].id === id)
        index = i;
    }
    if (index > -1){
      this.orderList[index].quantity++;
    }
  }

  subQuantity(id: any) {
    let index = -1;
    for (let i = 0; i < this.orderList.length; i++){
      if (this.orderList[i].id === id)
        index = i;
    }
    if (index > -1){
      this.orderList[index].quantity--;
    }
  }
}
