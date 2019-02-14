import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveControllerComponent } from './dove-controller.component';

describe('DoveControllerComponent', () => {
  let component: DoveControllerComponent;
  let fixture: ComponentFixture<DoveControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoveControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoveControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
