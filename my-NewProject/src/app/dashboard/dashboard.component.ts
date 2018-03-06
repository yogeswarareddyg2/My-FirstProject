import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { NewServiceService} from '../new-service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nameForm: FormGroup;

  constructor(private router: Router, private serverService: NewServiceService) { }

  ngOnInit() {
  }
  
  servers = [
    {
      name: 'Testserver',
      capacity:10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer (name: string){
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
    private generateId(){
      return Math.round(Math.random() * 10000);
    }
    onSave() {
      this.serverService.sServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    };

  onGet(){
    this.serverService.getServers()
    .subscribe(
      (response: Response) => {const data = response.json();
      console.log(data)},
      (error) => console.log(error)
    )
  };
}
