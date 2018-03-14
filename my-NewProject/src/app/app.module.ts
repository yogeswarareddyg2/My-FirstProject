import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AfterLoginComponentComponent } from './after-login-component/after-login-component.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NewServiceService} from './new-service.service';
import { HttpModule } from '@angular/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { httpTestService } from './http-Test.service';
import { CustomerDetailsComponent } from './http-test/customer-details/customer-details.component';
import { ViewCustomerComponent } from './http-test/view-customer/view-customer.component';

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
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, routing, FormsModule, HttpModule, 
  ],
  
  providers: [NewServiceService, httpTestService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
