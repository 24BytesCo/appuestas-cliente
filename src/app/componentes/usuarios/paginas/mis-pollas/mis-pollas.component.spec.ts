/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisPollasComponent } from './mis-pollas.component';

describe('MisPollasComponent', () => {
  let component: MisPollasComponent;
  let fixture: ComponentFixture<MisPollasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPollasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPollasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
