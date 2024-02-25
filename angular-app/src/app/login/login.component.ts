import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router, private location: Location) {}

  login() {
    this.userService.login(this.loginData).subscribe(
      (response) => {
        console.log('User login successfully!', response);

        // Navigate to a different route after successful login
        this.router.navigate(['/home']);

        // Replace the current state in the browser's history to prevent going back
        this.location.replaceState('/home');
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = error.error.message || 'An error occurred during login.';
      }
    );
  }
}
