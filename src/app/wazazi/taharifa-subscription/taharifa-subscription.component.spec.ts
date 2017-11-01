import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaharifaSubscriptionComponent } from './taharifa-subscription.component';

describe('TaharifaSubscriptionComponent', () => {
  let component: TaharifaSubscriptionComponent;
  let fixture: ComponentFixture<TaharifaSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaharifaSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaharifaSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
