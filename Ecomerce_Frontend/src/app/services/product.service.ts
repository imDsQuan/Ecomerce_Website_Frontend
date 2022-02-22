import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8000/api/product';

  constructor(
    private http:HttpClient,
  ) { }

  getAll(){
    return this.http.get(`${this.baseUrl}`);
  }

  onDelete(id: any){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getProduct(name: string){
    // @ts-ignore
    return this.http.post(`${this.baseUrl}/search?name=${name}`);
  }

  getProductById(id :any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
