import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestnineComponent } from './restnine.component';

describe('RestnineComponent', () => {
  let component: RestnineComponent;
  let fixture: ComponentFixture<RestnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
