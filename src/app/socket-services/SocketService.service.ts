import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketServiceService {
  constructor(private socket: Socket) {}

  public getPartidos$(): Observable<any> {
    return new Observable((observer) => {
      try {
        this.socket.on('connect', () => {
          //TODO Nativo!
          console.log('Conectado!');
        });

        this.socket.on('push', (data: any) => {
          //TODO Nuestro evento!!
          observer.next(data);
        });

        this.socket.on('disconnect', () => {
          //TODO Nativo!
          observer.complete();
        });

        this.socket.on('error', (e: any) => {
          //TODO Nativo!
          observer.error(e);
        });

        this.socket.on('connect_error', (e: any) => {
          //TODO Nativo!
          observer.error(e);
        });
      } catch (e) {
        observer.error(e);
      }
    });
  }

  public updateFix$(): Observable<any> {
    return new Observable((observer) => {
      try {
        this.socket.on('connect', () => {
          //TODO Nativo!
          console.log('Conectado Fixure!');
        });

        this.socket.on('push-fixure', (data: any) => {
          //TODO Nuestro evento!!
          console.log('Data Fix Recibida --> ', data.data);
          observer.next(data);
        });

        this.socket.on('disconnect', () => {
          //TODO Nativo!
          console.log('Desconectado desde angular');

          observer.complete();
        });

        this.socket.on('error', (e: any) => {
          //TODO Nativo!
          observer.error(e);
        });

        this.socket.on('connect_error', (e: any) => {
          //TODO Nativo!
          observer.error(e);
        });
      } catch (e) {
        observer.error(e);
      }
    });
  }
}
