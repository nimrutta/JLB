import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuhusuComponent } from './kutuhusu.component';

describe('KutuhusuComponent', () => {
  let component: KutuhusuComponent;
  let fixture: ComponentFixture<KutuhusuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuhusuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuhusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
