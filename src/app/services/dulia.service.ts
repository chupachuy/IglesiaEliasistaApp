import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuliaService {

  API: string = 'https://iglesiaeliasista.org.mx/api/apidulia/';

  constructor(private clientHttp:HttpClient) { }

  obtenerDulias(){
    return this.clientHttp.get(this.API);
  }


}
