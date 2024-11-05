import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPassesComponent } from './gym-passes.component';

describe('GymPassesComponent', () => {
  let component: GymPassesComponent;
  let fixture: ComponentFixture<GymPassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymPassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymPassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
