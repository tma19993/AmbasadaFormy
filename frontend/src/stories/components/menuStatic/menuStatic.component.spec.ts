import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuStaticComponent } from './menuStatic.component';


describe('ButtonComponent', () => {
  let component: MenuStaticComponent;
  let fixture: ComponentFixture<MenuStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
