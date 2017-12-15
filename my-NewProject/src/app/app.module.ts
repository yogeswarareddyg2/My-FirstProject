import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AfterLoginComponentComponent } from './after-login-component/after-login-component.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AfterLoginComponentComponent
  ],
  imports: [
    BrowserModule ,routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
