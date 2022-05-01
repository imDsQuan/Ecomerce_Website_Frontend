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
import { CreateProductComponent } from './components/admin/products/create-product/create-product.component';
import { EditProductComponent } from './components/admin/products/edit-product/edit-product.component';
import { CreateOrderComponent } from './components/admin/order/create-order/create-order.component';
import { OrderComponent } from './components/admin/order/order.component';
import { EditOrderComponent} from "./components/admin/order/edit-order/edit-order.component";
import { CustomerComponent } from './components/admin/customer/customer.component';
import { EditCustomerComponent } from './components/admin/customer/edit-customer/edit-customer.component';
import { OrderItemsComponent } from './shared/order-items/order-items.component';
import { SearchProductComponent } from './shared/search-product/search-product.component';
import { DiscountComponent } from './components/admin/discount/discount.component';
import { SearchCustomerComponent } from './shared/search-customer/search-customer.component';
import { CreateDiscountComponent} from "./components/admin/discount/create-discount/create-discount.component";
import { EditDiscountComponent } from './components/admin/discount/edit-discount/edit-discount.component';

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
    EditOrderComponent,
    CustomerComponent,
    EditCustomerComponent,
    OrderItemsComponent,
    SearchProductComponent,
    DiscountComponent,
    SearchCustomerComponent,
    CreateDiscountComponent,
    EditDiscountComponent,

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
