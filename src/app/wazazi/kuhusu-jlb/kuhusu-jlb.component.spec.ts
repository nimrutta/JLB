/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KuhusuJlbComponent } from './kuhusu-jlb.component';

describe('KuhusuJlbComponent', () => {
  let component: KuhusuJlbComponent;
  let fixture: ComponentFixture<KuhusuJlbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuhusuJlbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuhusuJlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
