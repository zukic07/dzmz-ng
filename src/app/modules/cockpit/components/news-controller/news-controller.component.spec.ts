import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsControllerComponent } from './news-controller.component';

describe('NewsControllerComponent', () => {
  let component: NewsControllerComponent;
  let fixture: ComponentFixture<NewsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
