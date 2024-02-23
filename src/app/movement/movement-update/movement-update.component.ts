// movement-update.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-update',
  templateUrl: './movement-update.component.html',
  styleUrls: ['./movement-update.component.css']
})
export class MovementUpdateComponent implements OnInit {
  movement: Movement = new Movement();

  constructor(
    private movementService: MovementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMovement();
  }

  loadMovement(): void {
    const movementId = Number(this.route.snapshot.paramMap.get('id'));
    this.movementService.getMovementById(movementId).subscribe(
      (movement) => {
        this.movement = movement;
      },
      (error) => {
        console.error('Error fetching movement:', error);
      }
    );
  }

  updateMovement(): void {
    this.movementService.updateMovement(this.movement.id!, this.movement).subscribe(
      () => {
        alert('Movement updated successfully!');
        this.router.navigate(['/movements']); // Redirect to movement list after update
      },
      (error) => {
        console.error('Error updating movement:', error);
      }
    );
  }
}
