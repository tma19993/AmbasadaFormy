import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFDietsComponent } from './diets.component';

describe('DietsComponent', () => {
  let component: AFDietsComponent;
  let fixture: ComponentFixture<AFDietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFDietsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
