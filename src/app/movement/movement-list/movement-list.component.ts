// movements-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  movements: Movement[] = [];

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
      this.loadMovements();
  }

  loadMovements(): void {
      this.movementService.getAllMovements().subscribe(
          movements => {
              this.movements = movements;
          },
          error => {
              console.error('Error fetching movements:', error);
          }
      );
  }

  confirmDelete(id: number | undefined): void {
      if (id !== undefined) {
          // Implement delete confirmation logic using a confirmation dialog or prompt
          const isConfirmed = window.confirm('Are you sure you want to delete this movement?');

          if (isConfirmed) {
              this.deleteMovement(id);
          }
      }
  }

  private deleteMovement(id: number): void {
      // Call the movementService.deleteMovement(id) to delete the movement
      this.movementService.deleteMovement(id).subscribe(
          () => {
              // Reload movements after successful deletion
              this.loadMovements();
          },
          error => {
              console.error('Error deleting movement:', error);
          }
      );
  }
}