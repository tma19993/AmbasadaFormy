import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnobComponent } from './knob.component';

describe('knobComponent', () => {
  let component: KnobComponent;
  let fixture: ComponentFixture<KnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
