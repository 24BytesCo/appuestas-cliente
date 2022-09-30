import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosTermiandosComponent } from './eventos-termiandos.component';

describe('EventosTermiandosComponent', () => {
  let component: EventosTermiandosComponent;
  let fixture: ComponentFixture<EventosTermiandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosTermiandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosTermiandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
