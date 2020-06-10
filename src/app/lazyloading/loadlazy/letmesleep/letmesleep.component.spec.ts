import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetmesleepComponent } from './letmesleep.component';

describe('LetmesleepComponent', () => {
  let component: LetmesleepComponent;
  let fixture: ComponentFixture<LetmesleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetmesleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetmesleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
