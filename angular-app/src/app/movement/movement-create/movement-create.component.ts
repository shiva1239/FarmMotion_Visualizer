// movement-create.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.css']
})
export class MovementCreateComponent {
  // Create an instance of the Movement model to bind form data
  newMovement: Movement = new Movement();

  constructor(private movementService: MovementService, private router: Router) { }

  // Function to handle form submission
  createMovement(): void {
    // Call the movementService.createMovement() to send the new movement data to the server
    this.movementService.createMovement(this.newMovement).subscribe(
      () => {
        // Redirect to the movements list page after successful creation
        this.router.navigate(['/movements']);
      },
      error => {
        console.error('Error creating movement:', error);
      }
    );
  }
}
