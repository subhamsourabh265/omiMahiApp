import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahiPComponent } from './mahi-p.component';

describe('MahiPComponent', () => {
  let component: MahiPComponent;
  let fixture: ComponentFixture<MahiPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahiPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahiPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
