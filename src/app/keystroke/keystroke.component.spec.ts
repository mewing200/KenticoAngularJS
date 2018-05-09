import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystrokeComponent } from './keystroke.component';

describe('KeystrokeComponent', () => {
  let component: KeystrokeComponent;
  let fixture: ComponentFixture<KeystrokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeystrokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeystrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
