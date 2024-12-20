import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LatriaService {

  API: string = 'https://iglesiaeliasista.org.mx/api/apilatria/';

  constructor(private httpClient:HttpClient) { }

  obtenerLatrias(){
    return this.httpClient.get(this.API);
  }
}
