import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementListComponent } from './movement-list.component';

describe('MovementListComponent', () => {
  let component: MovementListComponent;
  let fixture: ComponentFixture<MovementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementListComponent]
    });
    fixture = TestBed.createComponent(MovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
