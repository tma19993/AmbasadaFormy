import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFAdminPageComponent } from './admin-page.component';

describe('AdminPageComponent', () => {
  let component: AFAdminPageComponent;
  let fixture: ComponentFixture<AFAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
