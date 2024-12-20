import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gacetas } from './Gacetas';

@Injectable({
  providedIn: 'root'
})
export class GacetasService {

  API: string = 'https://iglesiaeliasista.org.mx/api/apigacetas/'

  constructor( private clientHttp:HttpClient) { }

  obtenerGacetas(){
    return this.clientHttp.get(this.API);
  }

}
