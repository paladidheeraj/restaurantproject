import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestthreeComponent } from './restthree.component';

describe('RestthreeComponent', () => {
  let component: RestthreeComponent;
  let fixture: ComponentFixture<RestthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
