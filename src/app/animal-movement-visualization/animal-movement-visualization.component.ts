import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MovementService } from '../services/movement.service';

@Component({
  selector: 'app-animal-movement-visualization',
  templateUrl: './animal-movement-visualization.component.html',
  styleUrls: ['./animal-movement-visualization.component.css']
})
export class AnimalMovementVisualizationComponent implements OnInit {
  private map!: L.Map;
  private pigMarkers: L.Marker[] = [];

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.initializeMap();
    this.fetchAndVisualizeMovements();
  }

  private initializeMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private fetchAndVisualizeMovements(): void {
    this.movementService.getCoordinatesForAllMovements().subscribe(
      (coordinates: number[][]) => {
        this.movementService.getLocationDataForAllMovements().subscribe(
          (locationData: string[][]) => {
            this.visualizeMovementsAndLocationData(coordinates, locationData);
          },
          error => {
            console.error('Error fetching location data:', error);
          }
        );
      },
      error => {
        console.error('Error fetching coordinates:', error);
      }
    );
  }

  private visualizeMovementsAndLocationData(movements: number[][], locationData: string[][]): void {
    movements.forEach((coordSet, index) => {
      const [originLat, originLon, destLat, destLon] = coordSet;

      const farmIcon = L.icon({
        iconUrl: '/assets/farm.png',
        iconSize: [35, 35],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      });

      const originMarker = L.marker([originLat, originLon], { icon: farmIcon }).addTo(this.map);
      const destMarker = L.marker([destLat, destLon], { icon: farmIcon }).addTo(this.map);

      const randomColor = this.getRandomColor();
      this.drawMovementLine([originLat, originLon], [destLat, destLon], randomColor);

      const [originCity, originState, destCity, destState] = locationData[index];
      const originLabel = `${originCity}, ${originState}`;
      const destLabel = `${destCity}, ${destState}`;

      originMarker.bindPopup(originLabel);
      destMarker.bindPopup(destLabel);

      // Introduce delay before starting pig movement
      setTimeout(() => {
        // Animate pig movement
        this.animatePig([originLat, originLon], [destLat, destLon], randomColor);

        // Fit the map bounds after all movements are completed
        if (index === movements.length - 1) {
          setTimeout(() => {
            this.fitMapBounds();
          }, 500); // Adjust the delay as needed
        }
      }, 1000 * index); // Adjust the delay as needed
    });
  }

  private drawMovementLine(origin: [number, number], destination: [number, number], color: string): void {
    const polyline = L.polyline([origin, destination], {
      color: color,
      dashArray: '5, 10',
    }).addTo(this.map);
  }

  private animatePig(origin: [number, number], destination: [number, number], color: string): void {
    const pigIcon = L.icon({
      iconUrl: '/assets/pig.png',
      iconSize: [35, 35],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    // Create a marker for the pig at the starting location
    const pigMarker = L.marker(origin, { icon: pigIcon }).addTo(this.map);
    this.pigMarkers.push(pigMarker);

    const steps = 1000; // Number of steps for animation
    const latStep = (destination[0] - origin[0]) / steps;
    const lonStep = (destination[1] - origin[1]) / steps;

    this.animateStep(pigMarker, origin, destination, latStep, lonStep, color, 0);
  }

  private animateStep(marker: L.Marker, origin: [number, number], destination: [number, number], latStep: number, lonStep: number, color: string, step: number): void {
    if (step <= 1000) {
      const lat = origin[0] + step * latStep;
      const lon = origin[1] + step * lonStep;
      marker.setLatLng([lat, lon]);

      const polyline = L.polyline([origin, [lat, lon]], {
        color: color,
        dashArray: '5, 10',
      }).addTo(this.map);

      step++;
      requestAnimationFrame(() => this.animateStep(marker, origin, destination, latStep, lonStep, color, step));
    }
  }

  private fitMapBounds(): void {
    // Fit the map bounds based on all pig markers
    const group = L.featureGroup(this.pigMarkers);
    this.map.fitBounds(group.getBounds());
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
