// // auth.guard.ts

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { UserService } from './services/user.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private userService: UserService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.userService.isAuthenticated()) {
//       // User is authenticated, allow navigation
//       return true;
//     } else {
//       // User is not authenticated, redirect to login page
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
