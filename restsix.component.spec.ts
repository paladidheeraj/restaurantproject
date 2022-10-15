import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsixComponent } from './restsix.component';

describe('RestsixComponent', () => {
  let component: RestsixComponent;
  let fixture: ComponentFixture<RestsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
