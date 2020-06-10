import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoontimeComponent } from './noontime.component';

describe('NoontimeComponent', () => {
  let component: NoontimeComponent;
  let fixture: ComponentFixture<NoontimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoontimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoontimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
