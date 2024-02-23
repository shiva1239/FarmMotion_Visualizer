import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement.service';


@Component({
  selector: 'app-movement-detail',
  templateUrl: './movement-detail.component.html',
  styleUrls: ['./movement-detail.component.css']
})
export class MovementDetailComponent implements OnInit {
  movement: Movement | undefined

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadMovement(id);
    }
  }
  constructor(private route: ActivatedRoute, private movementService: MovementService) {}
  
  loadMovement(id: number){
    this.movementService.getMovementById(id).subscribe((data) => {
      this.movement = data;
    });
  }
}



  
