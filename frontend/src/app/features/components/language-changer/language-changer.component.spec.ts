import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFLanguageChangerComponent } from './language-changer.component';


describe('ZalogowanoComponent', () => {
  let component: AFLanguageChangerComponent;
  let fixture: ComponentFixture<AFLanguageChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFLanguageChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFLanguageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
