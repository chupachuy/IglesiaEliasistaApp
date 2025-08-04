import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredicasService {

  API: string = 'https://iglesiaeliasista.org.mx/api/apipredicas/';

  constructor(private clientHttp:HttpClient) { }

  obtenerPredicas(){
    return this.clientHttp.get(this.API);
  }


}
