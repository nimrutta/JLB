/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakalaSubtopicsEditComponent } from './makala-subtopics-edit.component';

describe('MakalaSubtopicsEditComponent', () => {
  let component: MakalaSubtopicsEditComponent;
  let fixture: ComponentFixture<MakalaSubtopicsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakalaSubtopicsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakalaSubtopicsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
