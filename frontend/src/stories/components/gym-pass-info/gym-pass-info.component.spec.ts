import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPassInfoComponent } from './gym-pass-info.component';

describe('GymPassInfoComponent', () => {
  let component: GymPassInfoComponent;
  let fixture: ComponentFixture<GymPassInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymPassInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymPassInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
