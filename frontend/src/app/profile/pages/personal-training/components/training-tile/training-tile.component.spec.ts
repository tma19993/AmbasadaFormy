import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTileComponent } from './training-tile.component';

describe('TrainingTileComponent', () => {
  let component: TrainingTileComponent;
  let fixture: ComponentFixture<TrainingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
