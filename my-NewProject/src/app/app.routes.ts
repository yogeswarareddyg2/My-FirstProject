import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { AfterLoginComponentComponent } from './after-login-component/after-login-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

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
	}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 