import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrantScreenComponent } from './quadrant-screen.component';

describe('QuadrantScreenComponent', () => {
  let component: QuadrantScreenComponent;
  let fixture: ComponentFixture<QuadrantScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrantScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrantScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
