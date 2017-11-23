import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'b-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:member-ordering
  errorMessage: string;
  // tslint:disable-next-line:member-ordering
  pageTitle = 'Log In';

  constructor(private authService: AuthService,
    private router: Router) { }
  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
  ngOnInit(): void {

  }
}
