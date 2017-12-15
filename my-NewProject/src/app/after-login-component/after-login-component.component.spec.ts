import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginComponentComponent } from './after-login-component.component';

describe('AfterLoginComponentComponent', () => {
  let component: AfterLoginComponentComponent;
  let fixture: ComponentFixture<AfterLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
