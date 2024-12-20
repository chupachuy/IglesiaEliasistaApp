import { Component, OnInit } from '@angular/core';
import { DevocionarioService } from 'src/app/services/devocionario.service';

@Component({
  selector: 'app-devocionario',
  templateUrl: './devocionario.page.html',
  styleUrls: ['./devocionario.page.scss'],
})
export class DevocionarioPage implements OnInit {

  Devocionarios: any;

  constructor(private servicioDevocionarios:DevocionarioService) { }

  ngOnInit() {
    this.servicioDevocionarios.obtenerDevocionarios().subscribe((respuesta: any) =>{
      console.log(respuesta);
      this.Devocionarios = respuesta;
    });
  }

}
