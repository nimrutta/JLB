import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Makala1Component } from './makala1.component';

describe('Makala1Component', () => {
  let component: Makala1Component;
  let fixture: ComponentFixture<Makala1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Makala1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Makala1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
