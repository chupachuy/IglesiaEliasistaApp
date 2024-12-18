import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // API: string = 'http://localhost/eliasistaapi/api'
  API: string = 'https://iglesiaeliasista.org.mx/api/api/';

  constructor(private clientHttp:HttpClient) { }

  obtenerEventos(){
    return this.clientHttp.get(this.API);
  }
}
