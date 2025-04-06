import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequestDialogComponent } from './delete-request-dialog.component';

describe('DeleteRequestDialogComponent', () => {
  let component: DeleteRequestDialogComponent;
  let fixture: ComponentFixture<DeleteRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRequestDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
