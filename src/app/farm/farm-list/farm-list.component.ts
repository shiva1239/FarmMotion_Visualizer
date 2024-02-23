// farm-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {
  farms: Farm[] = [];

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.loadFarms();
  }

  loadFarms(): void {
    this.farmService.getAllFarms().subscribe(
      farms => {
        this.farms = farms;
      },
      error => {
        console.error('Error fetching farms:', error);
      }
    );
  }

  confirmDelete(farmId: number | undefined): void {
    if (farmId !== undefined) {
      const isConfirmed = this.showDeleteConfirmation();
      if (isConfirmed) {
        this.deleteFarm(farmId);
      }
    }
  }

  private showDeleteConfirmation(): boolean {
    return confirm('Are you sure you want to delete this farm?');
  }

  private deleteFarm(farmId: number): void {
    this.farmService.deleteFarm(farmId).subscribe(
      () => {
        console.log('Farm deleted successfully');
        // Reload farms after deletion
        this.loadFarms();
      },
      error => {
        console.error('Error deleting farm:', error);
        // Handle error (you can display an error message to the user)
      }
    );
  }
}
