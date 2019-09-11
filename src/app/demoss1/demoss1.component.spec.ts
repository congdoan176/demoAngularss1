import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demoss1Component } from './demoss1.component';

describe('Demoss1Component', () => {
  let component: Demoss1Component;
  let fixture: ComponentFixture<Demoss1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demoss1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demoss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
