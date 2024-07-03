import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTimerComponent } from './label-timer.component';

describe('LabelTimerComponent', () => {
  let component: LabelTimerComponent;
  let fixture: ComponentFixture<LabelTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelTimerComponent]
    });
    fixture = TestBed.createComponent(LabelTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
