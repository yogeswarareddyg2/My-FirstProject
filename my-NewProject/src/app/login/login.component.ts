import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  loginButton() {
    console.log("This is a login component")
    this.router.navigate(['afterloginComponent']);
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (username == 'admin' && password == 'password')
    this.router.navigate(['dashboard']);
    else
    alert ("The entered Username or Password is incorrect");

  }
}




