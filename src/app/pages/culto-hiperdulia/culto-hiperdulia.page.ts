import { Component, OnInit } from '@angular/core';
import { HiperduliaService } from 'src/app/services/hiperdulia.service';

@Component({
  selector: 'app-culto-hiperdulia',
  templateUrl: './culto-hiperdulia.page.html',
  styleUrls: ['./culto-hiperdulia.page.scss'],
})
export class CultoHiperduliaPage implements OnInit {

  Hiperdulias: any;

  constructor(private serviceHiperdulias:HiperduliaService) { }

  ngOnInit() {
    this.serviceHiperdulias.obtenerHiperdulias().subscribe((respuesta:any) => {
      console.log(respuesta);
      this.Hiperdulias = respuesta;
    });
  }

}
