import { Component, OnInit } from '@angular/core';
import { DuliaService } from 'src/app/services/dulia.service';

@Component({
  selector: 'app-culto-dulia',
  templateUrl: './culto-dulia.page.html',
  styleUrls: ['./culto-dulia.page.scss'],
})
export class CultoDuliaPage implements OnInit {

  Dulias: any;

  constructor(private serviceDulias:DuliaService) { }

  ngOnInit() {
    this.serviceDulias.obtenerDulias().subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.Dulias = respuesta;
    });
  }

}
