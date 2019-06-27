import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteAIdeeComponent } from './boite-aidee.component';

describe('BoiteAIdeeComponent', () => {
  let component: BoiteAIdeeComponent;
  let fixture: ComponentFixture<BoiteAIdeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteAIdeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteAIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
