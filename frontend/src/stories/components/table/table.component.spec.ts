import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFTableComponent } from './table.component';

describe('AFTableComponent', () => {
  let component: AFTableComponent;
  let fixture: ComponentFixture<AFTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
