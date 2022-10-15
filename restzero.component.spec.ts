import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestzeroComponent } from './restzero.component';

describe('RestzeroComponent', () => {
  let component: RestzeroComponent;
  let fixture: ComponentFixture<RestzeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestzeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
