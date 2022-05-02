import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  orderList: any = [];
  cartItems : any = [];
  total: any;
  createCustomerForm!: FormGroup;
  constructor(
    private ca: CartService,
    private fb: FormBuilder,
    private os: OrderService,
    private cs: CustomerService,
  ) { }

  ngOnInit(): void {
    this.createCustomerForm = this.fb.group({
        'first_name' : null,
        'last_name': null,
        'gender': null,
        'dob' : null,
        'tel' : null,
        'homeNo' : null,
        'street' : null,
        'city' : null,
        'district' : null,
      }
    );

    this.ca.cartItems.subscribe(
      data => {
        this.cartItems = data;
        this.total = this.totalCart(data);
        this.orderList = data;
        for (let i = 0; i < this.orderList.length; i++){
          this.orderList[i].product = this.orderList[i];
          this.orderList[i].price = this.orderList[i].discount_price?  this.orderList[i].discount_price : this.orderList[i].price;
          this.orderList[i].quantity = this.orderList[i].qnt;
        }
        console.log(this.orderList)
      }
    )
  }

  totalCart(cart: any = []){
    let sum = 0;
    for (let i = 0;  i < cart.length; i++){
      if (cart[i].discount_price){
        sum += cart[i].discount_price * cart[i].qnt;
      }
      else sum += cart[i].price * cart[i].qnt;
    }
    return sum;
  }

  onSubmit() {
    console.log(this.createCustomerForm.value);
    // @ts-ignore
    let payment = document.querySelector('input[name="paymentMethod"]:checked').value;

    const formData = new FormData();

    this.cs.createCustomer(this.createCustomerForm.value).subscribe(
      data => {

      }
    )

  }
}
