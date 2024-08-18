import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondManagementComponent } from './pond-management.component';

describe('PondManagementComponent', () => {
  let component: PondManagementComponent;
  let fixture: ComponentFixture<PondManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PondManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PondManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
