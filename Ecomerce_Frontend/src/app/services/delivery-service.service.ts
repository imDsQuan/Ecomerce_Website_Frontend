import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  baseUrl = 'http://localhost:8000/api/deliveryService'


  constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get(`${this.baseUrl}`);
  }
}
