import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrayersService } from 'src/app/services/prayers.service';
import { Prayer } from 'src/app/services/Prayers';

@Component({
  selector: 'app-oraciones',
  templateUrl: './oraciones.page.html',
  styleUrls: ['./oraciones.page.scss'],
})
export class OracionesPage implements OnInit {

  prayers: Prayer[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private prayersService: PrayersService) { }

  ngOnInit(): void {
    this.prayersService.getPrayers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(respuesta => {
        this.prayers = respuesta;
      });
  }
}
