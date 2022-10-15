import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsevenComponent } from './restseven.component';

describe('RestsevenComponent', () => {
  let component: RestsevenComponent;
  let fixture: ComponentFixture<RestsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
