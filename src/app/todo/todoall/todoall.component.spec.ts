import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoallComponent } from './todoall.component';

describe('TodoallComponent', () => {
  let component: TodoallComponent;
  let fixture: ComponentFixture<TodoallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
