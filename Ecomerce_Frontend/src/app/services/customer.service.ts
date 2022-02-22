import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:8000/api/customer'

  constructor(
    private http:HttpClient,
  ) { }

  getAll(){
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomer(value: any){
    // @ts-ignore
    return this.http.post(`${this.baseUrl}/search?name=${value}`);
  }

  createCustomer(value: any) {
    return this.http.post(this.baseUrl, value);
  }

  getCustomerById(id: any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  delete(id :any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
