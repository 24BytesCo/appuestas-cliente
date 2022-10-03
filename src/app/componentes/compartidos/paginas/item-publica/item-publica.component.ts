import { Component, OnInit } from '@angular/core';
import { EncuentosRes } from 'src/app/modelos/Result';
import { SocketServiceService } from 'src/app/socket-services/SocketService.service';

@Component({
  selector: 'app-item-publica',
  templateUrl: './item-publica.component.html',
  styleUrls: ['./item-publica.component.css'],
})
export class ItemPublicaComponent implements OnInit {
  PartidosProgramados: EncuentosRes[] = [];

  constructor(private _sokect: SocketServiceService) {}

  ngOnInit() {}
}
