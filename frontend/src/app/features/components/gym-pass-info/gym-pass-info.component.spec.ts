import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFGymPassInfoComponent } from './gym-pass-info.component';

describe('GymPassInfoComponent', () => {
  let component: AFGymPassInfoComponent;
  let fixture: ComponentFixture<AFGymPassInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFGymPassInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFGymPassInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
