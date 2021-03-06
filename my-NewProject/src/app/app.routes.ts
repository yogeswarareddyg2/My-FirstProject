import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { AfterLoginComponentComponent } from './after-login-component/after-login-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { CustomerDetailsComponent } from './http-test/customer-details/customer-details.component';
import { ViewCustomerComponent } from './http-test/view-customer/view-customer.component';


const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'afterloginComponent',
		component: AfterLoginComponentComponent
	},
	{
		path: 'aboutComponent',
		component: AboutComponentComponent
	},
	{
		path: 'dashboardComponent',
		component: DashboardComponent
	},
	{
		path: 'httpTestComponent',
		component: HttpTestComponent
	},
	{
		path: 'customerDet',
		component: CustomerDetailsComponent
	},
	{
		path: 'viewCust',
		component: ViewCustomerComponent
	}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 