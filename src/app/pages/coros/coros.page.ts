import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange, LoadingController } from '@ionic/angular';
import { CorosService } from 'src/app/services/coros.service';
import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-coros',
  templateUrl: './coros.page.html',
  styleUrls: ['./coros.page.scss'],
})
export class CorosPage implements OnInit {

  playlist: Track[] = [];
  activeTrack: Track = null as any;
  player: Howl = null as any;
  isPlaying = false;
  progress = 0;

  @ViewChild('range', { static: false }) range!: IonRange;
  loading: HTMLIonLoadingElement | undefined;

  constructor(
    private loadingCtrl: LoadingController,
    private corosService: CorosService // inyecta el servicio
  ) { }

  ngOnInit() {
    this.loadCoros(); // Cargar los coros al iniciar el componente
  }

  // Función para cargar los coros desde el servicio
  async loadCoros() {
    //this.presentLoading('Cargando coros...');
    try {
      const corosData = await this.corosService.obtenerCoros().toPromise(); // Obtén los datos de la API
      if (corosData && Array.isArray(corosData)) {
        this.playlist = corosData; // Asigna los datos a la playlist solo si la respuesta es un array
      } else {
        console.error('No se recibió un array válido de coros.');
      }
      this.loading?.dismiss(); // Oculta el loading una vez que se cargan los datos
    } catch (error) {
      console.error('Error al cargar los coros:', error);
      this.loading?.dismiss();
    }
  }

  start(track: Track) {
    this.presentLoading('Descargando coro...');
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.loading?.dismiss();
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgess();
      },
      onend: () => {
        console.log('Coro finalizado');
      }
    });
    this.player.play();
  }

  togglePlayer(pause: boolean) {
    this.isPlaying = !pause;
    if (pause) {
      this.player?.pause();
    } else {
      this.player?.play();
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index !== this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgess() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgess();
    }, 1000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    return this.loading.present();
  }
}
