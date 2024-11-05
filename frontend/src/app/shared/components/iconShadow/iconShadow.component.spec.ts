import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFIconShadowComponent } from './iconShadow.component';


describe('avatarComponent', () => {
  let component: AFIconShadowComponent;
  let fixture: ComponentFixture<AFIconShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AFIconShadowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFIconShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
