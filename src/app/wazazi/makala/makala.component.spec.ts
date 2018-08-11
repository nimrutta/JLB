import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakalaComponent } from './makala.component';

describe('MakalaComponent', () => {
  let component: MakalaComponent;
  let fixture: ComponentFixture<MakalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
