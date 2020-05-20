import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssstyleComponent } from './cssstyle.component';

describe('CssstyleComponent', () => {
  let component: CssstyleComponent;
  let fixture: ComponentFixture<CssstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
