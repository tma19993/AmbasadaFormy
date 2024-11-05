import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFGymPassesComponent } from './gym-passes.component';

describe('GymPassesComponent', () => {
  let component: AFGymPassesComponent;
  let fixture: ComponentFixture<AFGymPassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFGymPassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFGymPassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
