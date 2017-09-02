// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Service Imports
import { AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {AuthService} from './services/auth.service';


// Define Routes
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginUserComponent}
];

// Firebase project config
export const firebaseConfig = {
  apiKey: 'AIzaSyDvLk2mRanZVyvGW8kmI0IvEdJSxk-5_Xk',
  authDomain: 'fir-socialauth-3753a.firebaseapp.com',
  databaseURL: 'https://fir-socialauth-3753a.firebaseio.com',
  projectId: 'fir-socialauth-3753a',
  storageBucket: 'fir-socialauth-3753a.appspot.com',
  messagingSenderId: '914951948777'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
