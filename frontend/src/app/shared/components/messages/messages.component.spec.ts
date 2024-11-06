import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFMessagesComponent } from './messages.component';

describe('ButtonComponent', () => {
  let component: AFMessagesComponent;
  let fixture: ComponentFixture<AFMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
