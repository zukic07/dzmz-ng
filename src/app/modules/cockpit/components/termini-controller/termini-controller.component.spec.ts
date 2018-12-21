import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminiControllerComponent } from './termini-controller.component';

describe('TerminiControllerComponent', () => {
  let component: TerminiControllerComponent;
  let fixture: ComponentFixture<TerminiControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminiControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminiControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
