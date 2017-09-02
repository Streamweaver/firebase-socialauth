import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  isLoggedIn: boolean;
  userEmail: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.userEmail = auth.email;
      } else {
        this.isLoggedIn = false;
        this.userEmail = null;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
