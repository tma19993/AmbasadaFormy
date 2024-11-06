import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFPasswordComponent } from './password.component';

describe('ButtonComponent', () => {
  let component: AFPasswordComponent;
  let fixture: ComponentFixture<AFPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
