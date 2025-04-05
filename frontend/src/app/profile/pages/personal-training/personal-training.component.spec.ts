import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFPersonalTrainingComponent } from './personal-training.component';

describe('PersonalTrainerComponent', () => {
  let component: AFPersonalTrainingComponent;
  let fixture: ComponentFixture<AFPersonalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFPersonalTrainingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AFPersonalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
