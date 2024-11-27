import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFKnobComponent } from './knob.component';

describe('knobComponent', () => {
  let component: AFKnobComponent;
  let fixture: ComponentFixture<AFKnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFKnobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
