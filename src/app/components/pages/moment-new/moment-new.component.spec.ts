import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentNewComponent } from './moment-new.component';

describe('MomentNewComponent', () => {
  let component: MomentNewComponent;
  let fixture: ComponentFixture<MomentNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentNewComponent]
    });
    fixture = TestBed.createComponent(MomentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
