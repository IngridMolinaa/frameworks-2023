import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  isError = false;

  isAprovado = false;

  user = '';
  pwd = '';

  login() {


    if (this.user == 'ingrid' && this.pwd == '123456') {
      this.isAprovado = true;
      this.isError = false;
      this.router.navigate (['/dashboard']);
    }


    else {
      this.isError = true;
      this.isAprovado = false;


    }
  }
}
