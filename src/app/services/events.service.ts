import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from './Eventos';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  API: string = 'http://localhost/eliasistaapi/api'

  constructor(private clientHttp:HttpClient) { }

  obtenerEventos(){
    return this.clientHttp.get(this.API);
  }


}
