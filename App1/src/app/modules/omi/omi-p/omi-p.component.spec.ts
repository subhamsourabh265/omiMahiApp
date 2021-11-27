import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmiPComponent } from './omi-p.component';

describe('OmiPComponent', () => {
  let component: OmiPComponent;
  let fixture: ComponentFixture<OmiPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmiPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmiPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
