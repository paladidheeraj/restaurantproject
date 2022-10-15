import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoneComponent } from './restone.component';

describe('RestoneComponent', () => {
  let component: RestoneComponent;
  let fixture: ComponentFixture<RestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
