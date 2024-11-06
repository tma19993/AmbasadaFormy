import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFInputTextareaComponent } from './inputtextarea.component';

describe('ButtonComponent', () => {
  let component: AFInputTextareaComponent;
  let fixture: ComponentFixture<AFInputTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFInputTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFInputTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
