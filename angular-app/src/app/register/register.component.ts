import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    username: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.userService.signup(this.registerData).subscribe(
      (response) => {
        console.log('User registered successfully!', response);
        // Redirect to login page after successful registration
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during registration:', error);
        this.errorMessage = error.error.message || 'An error occurred during registration. Please try again.';
      }
    );
  }
}
