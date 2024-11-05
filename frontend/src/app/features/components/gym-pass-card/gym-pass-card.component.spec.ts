import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFGymPassCardComponent } from './gym-pass-card.component';


describe('avatarComponent', () => {
  let component: AFGymPassCardComponent;
  let fixture: ComponentFixture<AFGymPassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFGymPassCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFGymPassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
