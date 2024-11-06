import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFCheckboxComponent } from './checkbox.component';

describe('AFCheckboxComponent', () => {
  let component: AFCheckboxComponent;
  let fixture: ComponentFixture<AFCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
