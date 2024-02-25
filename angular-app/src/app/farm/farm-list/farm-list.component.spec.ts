import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmListComponent } from './farm-list.component';

describe('FarmListComponent', () => {
  let component: FarmListComponent;
  let fixture: ComponentFixture<FarmListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmListComponent]
    });
    fixture = TestBed.createComponent(FarmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
