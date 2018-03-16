import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AfterLoginComponentComponent } from './after-login-component/after-login-component.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NewServiceService} from './new-service.service';
import { HttpModule } from '@angular/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDetailsComponent } from './http-test/customer-details/customer-details.component';
import { ViewCustomerComponent } from './http-test/view-customer/view-customer.component';

import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CustomServiceService } from './custom-service.service';
import { MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AfterLoginComponentComponent,
    DashboardComponent,
    AboutComponentComponent,
    HttpTestComponent,
    CustomerDetailsComponent,
    ViewCustomerComponent,
    EditComponent,DeleteComponent
  ],
 
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, routing, FormsModule, HttpModule,ReactiveFormsModule ,MatDialogModule,BrowserAnimationsModule
  ],
  entryComponents:[DeleteComponent,EditComponent],
  providers: [NewServiceService,CustomServiceService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
