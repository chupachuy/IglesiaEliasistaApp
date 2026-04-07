import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PredicasService } from 'src/app/services/predicas.service';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.page.html',
  styleUrls: ['./predicas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PredicasPage implements OnInit {

  Predicas: any;
  servicePredicas = inject(PredicasService);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit() {
    this.servicePredicas.obtenerPredicas().subscribe((respuesta:any) =>{
      console.log(respuesta);
      this.Predicas = respuesta;
    });
  }

  increaseFont(): void {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize += this.fontStep;
    }
  }

  decreaseFont(): void {
    if (this.fontSize > this.minFontSize) {
      this.fontSize -= this.fontStep;
    }
  }

  resetFont(): void {
    this.fontSize = this.defaultFontSize;
  }
}
