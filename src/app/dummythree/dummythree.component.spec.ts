import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummythreeComponent } from './dummythree.component';

describe('DummythreeComponent', () => {
  let component: DummythreeComponent;
  let fixture: ComponentFixture<DummythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
