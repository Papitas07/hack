import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatComponent } from './debat.component';

describe('DebatComponent', () => {
  let component: DebatComponent;
  let fixture: ComponentFixture<DebatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
