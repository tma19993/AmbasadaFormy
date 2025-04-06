import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestsDialogComponent } from './edit-requests-dialog.component';

describe('EditRequestsDialogComponent', () => {
  let component: EditRequestsDialogComponent;
  let fixture: ComponentFixture<EditRequestsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRequestsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRequestsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
