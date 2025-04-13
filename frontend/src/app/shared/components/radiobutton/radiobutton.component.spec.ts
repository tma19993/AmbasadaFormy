import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFRadioButtonsComponent } from './radiobutton.component';

describe('AFRadioButtonsComponent', () => {
  let component: AFRadioButtonsComponent;
  let fixture: ComponentFixture<AFRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
