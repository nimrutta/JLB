/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AndikaMakalaComponent } from './andika-makala.component';

describe('AndikaMakalaComponent', () => {
  let component: AndikaMakalaComponent;
  let fixture: ComponentFixture<AndikaMakalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaMakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaMakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
