import { Component, DestroyRef, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrayersService } from 'src/app/services/prayers.service';
import { Prayer } from 'src/app/services/Prayers';

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.page.html',
  styleUrls: ['./oraciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class OracionesPage implements OnInit {

  prayers: Prayer[] = [];
  loading = true;
  private destroyRef = inject(DestroyRef);
  private prayersService = inject(PrayersService);
  private cdr = inject(ChangeDetectorRef);

  fontSize: number = 16;
  private readonly minFontSize: number = 10;
  private readonly maxFontSize: number = 40;
  private readonly defaultFontSize: number = 16;
  private readonly fontStep: number = 2;

  constructor() { }

  ngOnInit(): void {
    this.prayersService.getPrayers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(respuesta => {
        this.prayers = respuesta;
        this.loading = false;
        this.cdr.detectChanges();
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
