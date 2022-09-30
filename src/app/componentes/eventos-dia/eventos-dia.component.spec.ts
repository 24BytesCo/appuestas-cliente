import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDiaComponent } from './eventos-dia.component';

describe('EventosDiaComponent', () => {
  let component: EventosDiaComponent;
  let fixture: ComponentFixture<EventosDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
