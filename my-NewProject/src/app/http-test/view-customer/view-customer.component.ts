import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Customer } from '../../Model/customer';
import { FormGroup } from '@angular/forms';
import { EditComponent } from '../../edit/edit.component';
import { DeleteComponent } from '../../delete/delete.component';
import { MatDialog } from '@angular/material';
import { CustomServiceService } from '../../custom-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private service:CustomServiceService, private router:Router,public dialog: MatDialog) { }
  customers:Customer[];
  ngOnInit() {
   this.customers= this.service.getAll().map(
    res=> {
     
      this.customers= res.json();
      console.log('****INSIDE********'+this.customers);
    }
  ).subscribe();
   console.log('***********'+this.customers)
  }

  edit(id){
    console.log('delete '+id)
    this.router.navigate(['edit',id]);
  }
  createForm :FormGroup;

  openDialog(id){
    let dialogRef = this.dialog.open(EditComponent,{
      height: '900px',
      width: '1000px',
      data: { id : id}
    });
    dialogRef.afterClosed().subscribe(result => {
    //  this.selectedOption = result;
     console.log('we r here');
      this.createForm=result;
     
      this.customers= this.service.getAll().map(
        res=> {
         
          this.customers= res.json();
          
        }
      ).subscribe();
      /**let user:User={
        firstname:this.createForm.get('firstname').value,
        lastname:this.createForm.get('lastname').value,
        email:this.createForm.get('email').value,
        password:this.createForm.get('password').value,
        birthdate:this.createForm.get('birthdate').value
      };
      this.service.saveUser(user).subscribe();**/
    });
  }

  delete(id){
    let dialogRef = this.dialog.open(DeleteComponent,{
      height: '200px',
      width: '350px',
      data: { id : id}
    });
    dialogRef.afterClosed().subscribe(result => {
    //  this.selectedOption = result;
     
      this.createForm=result;
     
      this.customers= this.service.getAll().map(
        res=> {
         
          this.customers= res.json();
          console.log('****INSIDE********'+this.customers);
        }
      ).subscribe();
      /**let user:User={
        firstname:this.createForm.get('firstname').value,
        lastname:this.createForm.get('lastname').value,
        email:this.createForm.get('email').value,
        password:this.createForm.get('password').value,
        birthdate:this.createForm.get('birthdate').value
      };
      this.service.saveUser(user).subscribe();**/
    });
  }

}
