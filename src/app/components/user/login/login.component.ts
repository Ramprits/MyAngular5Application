import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  constructor(private authService: AuthService,
    private router: Router) { }
  public userName: string;
  public password: string;
  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      this.userName = loginForm.form.value.userName;
      this.password = loginForm.form.value.password;
      this.authService.login(this.userName, this.password);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
