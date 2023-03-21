import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeredBackgroundComponent } from './checkered-background.component';

describe('CheckeredBackgroundComponent', () => {
  let component: CheckeredBackgroundComponent;
  let fixture: ComponentFixture<CheckeredBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckeredBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckeredBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
