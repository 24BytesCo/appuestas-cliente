/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemProgramadosService } from './item-programados.service';

describe('Service: ItemProgramados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemProgramadosService]
    });
  });

  it('should ...', inject([ItemProgramadosService], (service: ItemProgramadosService) => {
    expect(service).toBeTruthy();
  }));
});
