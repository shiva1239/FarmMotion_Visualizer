// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Add your authentication-related methods here

  logout() {
    // Perform any cleanup or additional logic here
    // For example, clear user information, tokens, etc.

    // Navigate to the login page or any other page you prefer
    this.router.navigate(['/login']);
  }
}
