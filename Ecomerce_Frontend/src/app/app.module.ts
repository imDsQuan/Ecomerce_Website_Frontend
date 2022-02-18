import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { RequestResetPasswordComponent } from './components/admin/password/request-reset-password/request-reset-password.component';
import { ResponseResetPasswordComponent } from './components/admin/password/response-reset-password/response-reset-password.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {AdminSignupComponent} from "./components/admin/admin-signup/admin-signup.component";
import {AdminUserService} from "./services/admin-user.service";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CreateOrderComponent } from './components/admin/create-order/create-order.component';
import { OrderComponent } from './components/admin/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    DashboardComponent,
    RequestResetPasswordComponent,
    ResponseResetPasswordComponent,
    SidebarComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    CreateOrderComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AdminUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
