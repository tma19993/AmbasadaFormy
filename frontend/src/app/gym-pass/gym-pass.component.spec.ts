import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPassComponent } from './gym-pass.component';

describe('GymPassComponent', () => {
  let component: GymPassComponent;
  let fixture: ComponentFixture<GymPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
