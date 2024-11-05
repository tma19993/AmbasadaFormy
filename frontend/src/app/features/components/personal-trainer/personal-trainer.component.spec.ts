import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFPersonalTrainerComponent } from './personal-trainer.component';

describe('PersonalTrainerComponent', () => {
  let component: AFPersonalTrainerComponent;
  let fixture: ComponentFixture<AFPersonalTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFPersonalTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFPersonalTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
