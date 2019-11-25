import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModalTerminComponent } from './calendar-modal-termin.component';

describe('CalendarModalTerminComponent', () => {
  let component: CalendarModalTerminComponent;
  let fixture: ComponentFixture<CalendarModalTerminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarModalTerminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarModalTerminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
