import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalMovementVisualizationComponent } from './animal-movement-visualization.component';

describe('AnimalMovementVisualizationComponent', () => {
  let component: AnimalMovementVisualizationComponent;
  let fixture: ComponentFixture<AnimalMovementVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalMovementVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalMovementVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
