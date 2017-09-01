/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WazaziComponent } from './wazazi.component';

describe('WazaziComponent', () => {
  let component: WazaziComponent;
  let fixture: ComponentFixture<WazaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WazaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WazaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
