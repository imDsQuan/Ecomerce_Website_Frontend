import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  private baseUrl = 'http://localhost:8000/api/admin'
  constructor(
    private http:HttpClient,

  ) { }

  signup(data : any){
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`,data);

  }
}
