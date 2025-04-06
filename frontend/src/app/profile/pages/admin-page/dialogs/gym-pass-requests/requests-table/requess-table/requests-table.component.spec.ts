import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsTableComponent } from './requests-table.component';

describe('RequessTableComponent', () => {
  let component: RequestsTableComponent;
  let fixture: ComponentFixture<RequestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
