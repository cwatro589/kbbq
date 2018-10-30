import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageMobileComponent } from './mainpage-mobile.component';

describe('MainpageMobileComponent', () => {
  let component: MainpageMobileComponent;
  let fixture: ComponentFixture<MainpageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
