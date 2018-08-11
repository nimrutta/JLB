import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaharifaKujiungaComponent } from './taharifa-kujiunga.component';

describe('TaharifaKujiungaComponent', () => {
  let component: TaharifaKujiungaComponent;
  let fixture: ComponentFixture<TaharifaKujiungaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaharifaKujiungaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaharifaKujiungaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
