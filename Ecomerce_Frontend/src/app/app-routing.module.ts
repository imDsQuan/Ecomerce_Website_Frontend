import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AdminLoginComponent} from "./components/admin/admin-login/admin-login.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {AdminSignupComponent} from "./components/admin/admin-signup/admin-signup.component";
import {
  RequestResetPasswordComponent
} from "./components/admin/password/request-reset-password/request-reset-password.component";
import {
  ResponseResetPasswordComponent
} from "./components/admin/password/response-reset-password/response-reset-password.component";
import {AdminBeforeLoginService} from "./services/admin-before-login.service";
import {AdminAfterLoginService} from "./services/admin-after-login.service";
import {ProductsComponent} from "./components/admin/products/products.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
    canActivate: [AdminBeforeLoginService]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AdminAfterLoginService]

  },
  {
    path: 'admin/product',
    component: ProductsComponent,
    canActivate: [AdminAfterLoginService]

  },
  {
    path: 'admin/signup',
    component: AdminSignupComponent,
    canActivate: [AdminBeforeLoginService]

  },
  {
    path: 'admin/request-password-reset',
    component: RequestResetPasswordComponent,
    canActivate: [AdminBeforeLoginService]

  },
  {
    path: 'admin/response-password-reset',
    component: ResponseResetPasswordComponent,
    canActivate: [AdminBeforeLoginService]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
