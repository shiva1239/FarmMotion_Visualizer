import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMovmentComponent } from './upload-movment.component';

describe('UploadMovmentComponent', () => {
  let component: UploadMovmentComponent;
  let fixture: ComponentFixture<UploadMovmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadMovmentComponent]
    });
    fixture = TestBed.createComponent(UploadMovmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
