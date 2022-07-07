import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './screens/main/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './screens/auths/loginpage/loginpage.component';
import { SignuppageComponent } from './screens/auths/signuppage/signuppage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './screens/feed/feed.component';

const routes: Routes = [
  {path: 'login', component: LoginpageComponent},
  {path: 'signup', component: SignuppageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'feed', component: FeedComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent,
    FeedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
