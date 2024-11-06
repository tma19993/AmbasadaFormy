import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFInputComponent } from './input.component';

describe('AFInputComponent', () => {
  let component: AFInputComponent;
  let fixture: ComponentFixture<AFInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
