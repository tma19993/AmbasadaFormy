import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuliderComponent } from './form-bulider.component';

describe('FormBuliderComponent', () => {
  let component: FormBuliderComponent;
  let fixture: ComponentFixture<FormBuliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
