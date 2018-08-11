import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSomaZaidi1Component } from './blog-soma-zaidi1.component';

describe('BlogSomaZaidi1Component', () => {
  let component: BlogSomaZaidi1Component;
  let fixture: ComponentFixture<BlogSomaZaidi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSomaZaidi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSomaZaidi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
