import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaktijeControllerComponent } from './vaktije-controller.component';

describe('VaktijeControllerComponent', () => {
  let component: VaktijeControllerComponent;
  let fixture: ComponentFixture<VaktijeControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaktijeControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaktijeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
