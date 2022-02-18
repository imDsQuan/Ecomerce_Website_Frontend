import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList !: any;

  constructor(
    private os: OrderService,
  ) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder(){
    this.os.getAll().subscribe(
      value => this.orderList = value,
      error => console.log(error),
    )
  }


  changeOrderStatus(event: Event, id:any) {
    // @ts-ignore
    if(event.target.value != 0){
      // @ts-ignore
      this.os.changeStatus({"status" : event.target.value}, id).subscribe(
        data=> this.getAllOrder(),
        error=>console.log(error)
      );
    }
  }
}
