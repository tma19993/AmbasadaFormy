import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFMenuStaticComponent } from './menu-static.component';


describe('ButtonComponent', () => {
  let component: AFMenuStaticComponent;
  let fixture: ComponentFixture<AFMenuStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFMenuStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFMenuStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
