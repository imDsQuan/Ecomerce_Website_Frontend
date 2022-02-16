import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AdminUserService} from "../../../services/admin-user.service";
import {AdminTokenService} from "../../../services/admin-token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  signUpForm !: FormGroup;

  error = {
    first_name: null,
    last_name: null,
    email: null,
    username: null,
    password: null,
    password_confirmation: null,
  };

  constructor(
    private fb:FormBuilder,
    private adService:AdminUserService,
    private token:AdminTokenService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      first_name: null,
      last_name: null,
      email:null,
      username: null,
      password: null,
      password_confirmation: null,
    })
  }

  onSubmit(){
    this.adService.signup(this.signUpForm.value).subscribe(
      data => this.handleResponse(data),
      error=> this.handleError(error)
    );
  }

  // @ts-ignore
   handleError(error) {
    this.error.first_name = error.error?.errors?.first_name;
    this.error.last_name = error.error?.errors?.last_name;
    this.error.username = error.error?.errors?.username;
    this.error.email = error.error?.errors?.email;
    this.error.password = error.error?.errors?.password;

    console.log(this.error);

  }

  handleResponse(data:any){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/admin/dashboard');
  }
}
