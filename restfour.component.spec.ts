import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfourComponent } from './restfour.component';

describe('RestfourComponent', () => {
  let component: RestfourComponent;
  let fixture: ComponentFixture<RestfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
