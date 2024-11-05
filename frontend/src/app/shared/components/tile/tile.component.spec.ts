import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFTileComponent } from './tile.component';

describe('AFTileComponent', () => {
  let component: AFTileComponent;
  let fixture: ComponentFixture<AFTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
