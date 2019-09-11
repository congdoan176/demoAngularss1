import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloForm1Component } from './hello-form1.component';

describe('HelloForm1Component', () => {
  let component: HelloForm1Component;
  let fixture: ComponentFixture<HelloForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
