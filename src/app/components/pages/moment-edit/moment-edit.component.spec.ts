import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentEditComponent } from './moment-edit.component';

describe('MomentEditComponent', () => {
  let component: MomentEditComponent;
  let fixture: ComponentFixture<MomentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentEditComponent]
    });
    fixture = TestBed.createComponent(MomentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
