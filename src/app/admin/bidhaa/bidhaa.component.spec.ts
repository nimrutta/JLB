import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidhaaComponent } from './bidhaa.component';

describe('BidhaaComponent', () => {
  let component: BidhaaComponent;
  let fixture: ComponentFixture<BidhaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidhaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidhaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
