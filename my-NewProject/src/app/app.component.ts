import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpTestComponent } from './http-test/http-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  loginButton() {
    this.router.navigate(['aboutComponent']);  
  }
  homeButton() {
    this.router.navigate(['customerDet']);  
  }
  directives: [HttpTestComponent]
}
