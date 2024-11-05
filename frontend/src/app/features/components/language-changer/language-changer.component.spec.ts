import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageChangerComponent } from './language-changer.component';


describe('ZalogowanoComponent', () => {
  let component: LanguageChangerComponent;
  let fixture: ComponentFixture<LanguageChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
