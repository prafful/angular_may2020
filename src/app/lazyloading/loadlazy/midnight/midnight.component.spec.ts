import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnightComponent } from './midnight.component';

describe('MidnightComponent', () => {
  let component: MidnightComponent;
  let fixture: ComponentFixture<MidnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
