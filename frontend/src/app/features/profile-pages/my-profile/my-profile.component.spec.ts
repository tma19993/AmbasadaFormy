import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFMyProfileComponent } from './my-profile.component';

describe('ProfileComponent', () => {
  let component: AFMyProfileComponent;
  let fixture: ComponentFixture<AFMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
