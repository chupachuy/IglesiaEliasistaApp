import { Component, OnInit } from '@angular/core';
import { LatriaService } from 'src/app/services/latria.service';

@Component({
  selector: 'app-culto-latria',
  templateUrl: './culto-latria.page.html',
  styleUrls: ['./culto-latria.page.scss'],
})
export class CultoLatriaPage {

  Latrias: any;

  constructor(private serviceLatria:LatriaService) { }

  ngOnInit() {
    this.serviceLatria.obtenerLatrias().subscribe((response:any) =>{
      console.log(response);
      this.Latrias = response;
    });
  }

}
