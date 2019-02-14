import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HutbaControllerComponent } from './hutba-controller.component';

describe('HutbaControllerComponent', () => {
  let component: HutbaControllerComponent;
  let fixture: ComponentFixture<HutbaControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HutbaControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HutbaControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
