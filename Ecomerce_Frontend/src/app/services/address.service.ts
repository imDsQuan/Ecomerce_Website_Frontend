import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl = 'http://localhost:8000/api/customer';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(id:any, ){
    return this.http.get(`${this.baseUrl}/${id}/address`);
  }
}
