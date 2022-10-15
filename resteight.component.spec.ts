import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResteightComponent } from './resteight.component';

describe('ResteightComponent', () => {
  let component: ResteightComponent;
  let fixture: ComponentFixture<ResteightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResteightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResteightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
