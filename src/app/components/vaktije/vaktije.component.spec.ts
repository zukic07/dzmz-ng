import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaktijeComponent } from './vaktije.component';

describe('VaktijeComponent', () => {
  let component: VaktijeComponent;
  let fixture: ComponentFixture<VaktijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaktijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaktijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
