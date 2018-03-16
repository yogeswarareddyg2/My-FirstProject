import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomServiceService } from '../custom-service.service';
import { Customer } from '../model/customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private route: ActivatedRoute, private service: CustomServiceService,public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  id: number;
   cust:Customer;
  private sub: any;
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
        postalcode:new FormControl(''),
        district:new FormControl(''),
        country:new FormControl(''),
      
    });
    this.sub = this.route.params.subscribe(params => {
     // this.id = +params['id']; // (+) converts string 'id' to a number
   console.log('modal values',this.data.id);
   this.id=this.data.id;
      // In a real app: dispatch action to load the details here.
   });

    this.cust=this.service.getCustomer(this.id).map(
      res=> {
       console.log('json ',res.json());
       this.cust= res.json();
       console.log('firstname ',this.cust.firstName);
       this.loginForm=new FormGroup({
        
        firstName:new FormControl(this.cust.firstName),
        lastName:new FormControl(this.cust.lastName),
        middleName:new FormControl(this.cust.middleName),
        sex:new FormControl(this.cust.sex),
        race:new FormControl(this.cust.race),
        firstLine:new FormControl(this.cust.address.firstLine),
        secondLine:new FormControl(this.cust.address.secondLine),
        city:new FormControl(this.cust.address.city),
        state:new FormControl(this.cust.address.state),
        postalCode:new FormControl(this.cust.address.postalcode),
        district:new FormControl(this.cust.address.district),
        country:new FormControl(this.cust.address.country)
       
       }
      );
      console.log('form ',this.loginForm);
      }
    ).subscribe();
  console.log('cust in edit ',this.cust);
  
  }

  save(){
    console.log("**********"+this.loginForm.get("firstName").value);
    console.log("**********"+this.loginForm.get("lastName").value);
    console.log('cus data ',this.cust);
    this.cust={
      id:this.cust.id,
      firstName:this.loginForm.get("firstName").value,
      lastName:this.loginForm.get("lastName").value,
      middleName:this.loginForm.get("middleName").value,
      sex:this.loginForm.get("sex").value,
      race:this.loginForm.get("race").value,
      address:{
        id:this.cust.address.id,
        firstLine:this.loginForm.get("firstLine").value,
        secondLine:this.loginForm.get("secondLine").value,
        city:this.loginForm.get("city").value,
        state:this.loginForm.get("state").value,
        postalcode:this.loginForm.get("postalCode").value,
        country:this.loginForm.get("postalCode").value,
        district:this.loginForm.get("district").value
      }
    }
    this.service.updateUser(this.cust);
    console.log('closing*******',this.dialogRef);
    this.dialogRef.close();
  }

}
