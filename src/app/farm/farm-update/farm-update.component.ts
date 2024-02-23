// farm-update.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farm-update',
  templateUrl: './farm-update.component.html',
  styleUrls: ['./farm-update.component.css']
})
export class FarmUpdateComponent implements OnInit {
  farm: Farm = new Farm();

  constructor(
    private farmService: FarmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFarm();
  }

  loadFarm(): void {
    const farmId = Number(this.route.snapshot.paramMap.get('id'));
    this.farmService.getFarmById(farmId).subscribe(
      (farm) => {
        this.farm = farm;
      },
      (error) => {
        console.error('Error fetching farm:', error);
      }
    );
  }

  updateFarm(): void {
    this.farmService.updateFarm(this.farm.id!, this.farm).subscribe(
      () => {
        alert('Farm updated successfully!');
        this.router.navigate(['/farms']); // Redirect to farm list after update
      },
      (error) => {
        console.error('Error updating farm:', error);
      }
    );
  }
}
