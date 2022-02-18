import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'http://localhost:8000/api/order';

  constructor(
    private http: HttpClient,
  ) { }

  createOrder(data : any){
    return this.http.post(this.baseUrl,data);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  changeStatus(value: any, id: any){
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
}
