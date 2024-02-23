import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementUpdateComponent } from './movement-update.component';

describe('MovementUpdateComponent', () => {
  let component: MovementUpdateComponent;
  let fixture: ComponentFixture<MovementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
