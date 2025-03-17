import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTileComponent } from './diet-tile.component';

describe('DietTileComponent', () => {
  let component: DietTileComponent;
  let fixture: ComponentFixture<DietTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
