import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuhudaComponent } from './shuhuda.component';

describe('ShuhudaComponent', () => {
  let component: ShuhudaComponent;
  let fixture: ComponentFixture<ShuhudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuhudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuhudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
