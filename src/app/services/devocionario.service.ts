import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevocionarioService {

  API: string = 'https://iglesiaeliasista.org.mx/api/apidevocionario/'

  constructor(private clientHttp:HttpClient) { }

  obtenerDevocionarios(){
    return this.clientHttp.get(this.API);
  }

}
