import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFPhotoUploaderComponent } from './photo-uploader.component';

describe('PhotoUploaderComponent', () => {
  let component: AFPhotoUploaderComponent;
  let fixture: ComponentFixture<AFPhotoUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFPhotoUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFPhotoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
