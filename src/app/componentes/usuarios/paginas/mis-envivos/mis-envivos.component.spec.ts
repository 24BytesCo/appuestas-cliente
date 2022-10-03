/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisEnvivosComponent } from './mis-envivos.component';

describe('MisEnvivosComponent', () => {
  let component: MisEnvivosComponent;
  let fixture: ComponentFixture<MisEnvivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisEnvivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEnvivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
