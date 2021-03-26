import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from './FirebaseAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  open = false;
  loggedIn = false;

  loginFailed = false;

  hover = '';

  email = '';
  password = '';

  constructor(private loginService: FirebaseAuthService,
              private auth: FirebaseAuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.auth.loggedIn();
    if (this.loggedIn) {
      this.hover = 'You are logged in as: ' + this.auth.cred.user.email;
    } else {
      this.hover = 'Click to log in!';
    }
  }

  openLogin(): void {
    this.open = true;
  }

  closeLogin(): void {
    this.open = false;
  }

  onKeyPassword(event): void {
    this.password = event.target.value;
  }

  onKeyEmail(event): void {
    this.email = event.target.value;
  }

  logout(): void {
    this.auth.logout().then(value => {
      this.hover = 'Click to log in!';
      this.loggedIn = false;
    });
  }

  login(): void {
    this.loginService.login(this.email, this.password).then(value => {
      this.hover = value.user.uid;
      this.loginFailed = false;
      this.loggedIn = true;
    }).catch(reason => {
      this.loginFailed = true;
    });
  }

}
