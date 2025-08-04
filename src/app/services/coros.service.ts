import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from '../pages/coros/coros.page';

@Injectable({
  providedIn: 'root'
})
export class CorosService {

  //API: string = 'http://localhost/eliasistaapi/apicoros/';
  API: string = 'https://iglesiaeliasista.org.mx/api/apicoros/';

  constructor(private clientHttp: HttpClient) {}

  // Modificar la función para que devuelva un Observable de Track[]
  obtenerCoros(): Observable<Track[]> {
    return this.clientHttp.get<any[]>(this.API).pipe(
      map(coros => coros.map(coro => ({
        name: coro.title,  // Se asigna el title a name
        path: coro.url     // Se asigna el url a path
      })))
    );
  }
}
