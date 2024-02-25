import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.css']
})
export class FarmCreateComponent {
  newFarm: Farm = new Farm();

  constructor(private farmService: FarmService, private router: Router) { }

  createFarm(): void {
    this.farmService.createFarm(this.newFarm).subscribe(
      (createdFarm: Farm) => {
        console.log('Farm created successfully:', createdFarm);
        // Redirect to the farm list component
        this.router.navigate(['/farms']);
      },
      (error) => {
        console.error('Error creating farm:', error);
        // Handle error (you can display an error message to the user)
      }
    );
  }
}
