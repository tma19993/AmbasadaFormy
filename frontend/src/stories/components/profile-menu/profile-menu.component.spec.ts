import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFProfileMenuComponent } from './profile-menu.component';

describe('ProfileMenuComponent', () => {
  let component: AFProfileMenuComponent;
  let fixture: ComponentFixture<AFProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFProfileMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
