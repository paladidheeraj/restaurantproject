import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfiveComponent } from './restfive.component';

describe('RestfiveComponent', () => {
  let component: RestfiveComponent;
  let fixture: ComponentFixture<RestfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
