import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomepageComponent } from './screens/main/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './screens/auths/loginpage/loginpage.component';
import { SignuppageComponent } from './screens/auths/signuppage/signuppage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'login', component: LoginpageComponent},
  {path: 'signup', component: SignuppageComponent},
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
