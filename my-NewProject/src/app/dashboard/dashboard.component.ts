import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nameForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  
  loginButton() {
    this.router.navigate(['aboutComponent']);  
  }
}
