import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Latrias } from './Latrias';

@Injectable({
  providedIn: 'root'
})
export class LatriaService {

  Latrias: any;

  API: string = 'https://iglesiaeliasista.org.mx/api/apilatria/';

  constructor(private httpClient:HttpClient) { }

  obtenerLatrias(){
    return this.httpClient.get(this.API);
  }
}
