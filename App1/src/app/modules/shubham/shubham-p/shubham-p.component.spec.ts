import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhamPComponent } from './shubham-p.component';

describe('ShubhamPComponent', () => {
  let component: ShubhamPComponent;
  let fixture: ComponentFixture<ShubhamPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShubhamPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShubhamPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
