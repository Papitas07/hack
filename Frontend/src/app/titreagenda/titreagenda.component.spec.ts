import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreagendaComponent } from './titreagenda.component';

describe('TitreagendaComponent', () => {
  let component: TitreagendaComponent;
  let fixture: ComponentFixture<TitreagendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreagendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
