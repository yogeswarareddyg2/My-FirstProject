import { Component, OnInit } from '@angular/core';
import { httpTestService } from '../http-Test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  public showDetail = false;
  providers: [httpTestService]
  getData: String;
  postData: String;
  constructor(private httpService: httpTestService,private router: Router) { }

  public contact = {FirstName: "Yogi", LastName: "G", PhoneNumber: "270-227-0772", Email: "yreddyg2@gmail.com"}
  ngOnInit() {
  }
  onTestGet(servers: any){
    this.httpService.getCurrentTime(servers)
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
    );
  }
  onTestPost(){
    this.httpService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
    );
  }
  onSelect(){
    this.showDetail = true;
  }

  saveDetail() {
    this.router.navigate(['customerDet']);
  }
  editDetail() {
    this.router.navigate(['customerDet']);
  }


}
