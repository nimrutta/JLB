/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KujiungaComponent } from './kujiunga.component';

describe('KujiungaComponent', () => {
  let component: KujiungaComponent;
  let fixture: ComponentFixture<KujiungaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KujiungaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KujiungaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
