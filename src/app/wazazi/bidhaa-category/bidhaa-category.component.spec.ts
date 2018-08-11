import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidhaaCategoryComponent } from './bidhaa-category.component';

describe('BidhaaCategoryComponent', () => {
  let component: BidhaaCategoryComponent;
  let fixture: ComponentFixture<BidhaaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidhaaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidhaaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
