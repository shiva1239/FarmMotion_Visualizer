import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css'],
})
export class FarmDetailComponent implements OnInit {
  farm: Farm | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadFarm(id);
    }
  }

  constructor(private route: ActivatedRoute, private farmService: FarmService) {}

  loadFarm(id: number) {
    this.farmService.getFarmById(id).subscribe((data) => {
      this.farm = data;
    });
  }
}
