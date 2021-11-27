import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaitikPComponent } from './naitik-p.component';

describe('NaitikPComponent', () => {
  let component: NaitikPComponent;
  let fixture: ComponentFixture<NaitikPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaitikPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaitikPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
