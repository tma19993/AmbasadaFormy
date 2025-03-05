import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFMenuComponent } from './menu.component';

describe('AFMenuComponent', () => {
  let component: AFMenuComponent;
  let fixture: ComponentFixture<AFMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AFMenuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AFMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
