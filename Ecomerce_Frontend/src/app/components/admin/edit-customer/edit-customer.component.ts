import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm !: FormGroup;
  customerId : any;
  customer!: any;
  editAddress: any;
  constructor(
    private fb: FormBuilder,
    private cs: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.editCustomerForm = this.fb.group({
      first_name: null,
      last_name: null,
      tel: null,
      gender: null,
      dob: null,
      addresses : this.fb.array([]),
    });
    this.editAddress = this.fb.group({
      homeNo: null,
      street: null,
      city: null,
      district: null,
    })
  }

  ngOnInit(): void {

    this.customerId = this.route.snapshot.paramMap.get('id');
    this.customer = this.cs.getCustomerById(this.customerId).subscribe(
      value => {
        this.customer = value;
        this.onInitGender(this.customer.gender);
        console.log(this.customer);
        this.editCustomerForm.patchValue({
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          tel: this.customer.tel,
          gender: this.customer.gender,
          dob: this.customer.Dob,
        })
        for(let i = 0 ;i < this.customer.address.length; i++)
          this.addresses.push(
            new FormGroup({
              homeNo: new FormControl(this.customer.address[i].homeNo),
              street: new FormControl(this.customer.address[i].street),
              city: new FormControl(this.customer.address[i].city),
              district: new FormControl(this.customer.address[i].district),
            })
          )
      }
    )

  }

  onInitGender(gender : any){
    // @ts-ignore
    let genders = document.querySelectorAll('input[type="radio"]');
    console.log(genders)
    for( let i = 0; i < genders.length; i++){
      // @ts-ignore
      if (genders[i]?.value.toLowerCase() == gender.toLowerCase()){
        // @ts-ignore
        genders[i]?.checked = true;
      }
    }
  }

  get addresses(){
    return this.editCustomerForm.controls["addresses"] as FormArray;
  }

  addAddress(){
    const addressForm = this.fb.group({
      homeNo: '',
      street: null,
      city: null,
      district: null,
    })
    this.addresses.push(addressForm);
    console.log(this.addresses.value);
  }

  onSubmit() {
    console.log(this.editCustomerForm.value);
  }

  openModal(add : any){
    let modal = document.getElementById("myModal");

    (modal as HTMLElement).style.display = "block";

    console.log(add);

    this.editAddress.patchValue({
      homeNo: add.homeNo,
      street: add.street,
      city: add.city,
      district: add.district,
    })

  }

  closeModal() {
    let modal = document.getElementById("myModal");

    (modal as HTMLElement).style.display = "none";

  }

  onAddressEdit(i: number) {
    this.customer.address[i].homeNo = this.editAddress.get('homeNo').value;
    this.customer.address[i].street = this.editAddress.get('street').value;
    this.customer.address[i].city = this.editAddress.get('city').value;
    this.customer.address[i].district = this.editAddress.get('district').value;

    this.closeModal();
  }

  deleteAdd(i: any) {
    this.customer.address.splice(i, 1);
  }

  deleteAddress(addressIndex: any) {
    this.addresses.removeAt(addressIndex);
  }
}
