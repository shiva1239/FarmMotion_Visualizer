import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementCreateComponent } from './movement-create.component';

describe('MovementCreateComponent', () => {
  let component: MovementCreateComponent;
  let fixture: ComponentFixture<MovementCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementCreateComponent]
    });
    fixture = TestBed.createComponent(MovementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
