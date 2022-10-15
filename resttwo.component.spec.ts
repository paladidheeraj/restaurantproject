import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResttwoComponent } from './resttwo.component';

describe('ResttwoComponent', () => {
  let component: ResttwoComponent;
  let fixture: ComponentFixture<ResttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
