import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../Model/customer';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  public showDetail = false;
 
  getData: String;
  postData: String;
  constructor(private service:CustomServiceService ,private router: Router) { }

  public contact = {FirstName: "Yogi", LastName: "G", PhoneNumber: "270-227-0772", Email: "yreddyg2@gmail.com"}
  ngOnInit() {
    this.loginForm=new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      middleName:new FormControl(''),
      sex:new FormControl(''),
      race:new FormControl(''),
      firstLine:new FormControl(''),
      secondLine:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      postalCode:new FormControl(''),
      country:new FormControl(''),
      district:new FormControl(''),
    }
    )
  }
  loginForm:FormGroup;
 
  onSelect(){
    this.showDetail = true;
  }
 customer:Customer;
  saveDetail() {
    console.log('form', this.loginForm.get("firstName").value);
    this.customer ={
      id:null,
      firstName:this.loginForm.get("firstName").value,
      lastName:this.loginForm.get("lastName").value,
      middleName:this.loginForm.get("middleName").value,
      sex:this.loginForm.get("sex").value,
      race:this.loginForm.get("race").value,

      address:{
        id:null,
        firstLine:this.loginForm.get("firstLine").value,
        secondLine:this.loginForm.get("secondLine").value,
        city:this.loginForm.get("city").value,
        state:this.loginForm.get("state").value,
        postalcode:this.loginForm.get("postalCode").value,
        district:this.loginForm.get("district").value,
        country:this.loginForm.get("postalCode").value
      }
    };
 this.service.saveUser(this.customer);
    this.router.navigate(['customerDet']);
  }
  editDetail() {
    this.router.navigate(['customerDet']);
  }

  


}
