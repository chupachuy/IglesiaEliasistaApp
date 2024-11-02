import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange, LoadingController } from '@ionic/angular';
import { Howl, Howler } from 'howler';

export interface Track{
  name: string;
  path: string;
}


@Component({
  selector: 'app-coros',
  templateUrl: './coros.page.html',
  styleUrls: ['./coros.page.scss'],
})


export class CorosPage implements OnInit {
 

  playlist: Track[] = [
    {
      name: 'Al Rey de los cielos',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Al-Rey-de-los-cielos.mp3'
    },
    {
      name: 'Bellísima María',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Bellisima-Maria.mp3'
    },
    {
      name: 'Bienvenidos',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Bienvenidos.mp3'
    },
    {
      name: 'Consagrados',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Consagrados.mp3'
    },
    {
      name: 'El mundo perdido',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/El-mundo-perdido.mp3'
    },
    {
      name: 'El séptimo cielo',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/El-septimo-cielo.mp3'
    },
    {
      name: 'Faro de Luz',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Faro-de-Luz.mp3'
    },
    {
      name: 'Gloría al Padre',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Gloria-al-Padre.mp3'
    },
    {
      name: 'Gracias Altísimo te den',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Gracias-Altisimo-te-den.mp3'
    },
    {
      name: 'Graciosa Azucena',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Graciosa-Azucena.mp3'
    },
    {
      name: 'Hoy que te encontré',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Hoy-que-te-encontre.mp3'
    },
    {
      name: 'Iglesia de Elías',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Iglesia-de-Elias.mp3'
    },
    {
      name: 'La Era Elías',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/La-Era-Elias.mp3'
    },
    {
      name: 'La marcha eliasista',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/La-marcha-eliasista.mp3'
    },
    {
      name: 'La Mujer Hermosa Vestida del Sol',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/La-Mujer-Hermosa-Vestida-del-Sol.mp3'
    },
    {
      name: 'La nueva era',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/La-nueva-era.mp3'
    },
    {
      name: 'La Siembra',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/La-Siembra.mp3'
    },
    {
      name: 'Lluvias de gracia',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Lluvias-de-gracia.mp3'
    },
    {
      name: 'Los 144,000 marcados',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Los-144000-marcados.mp3'
    },
    {
      name: 'Los Tres Mesías',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Los-Tres-Mesias.mp3'
    },
    {
      name: 'Marchar Israel',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Marchar-Israel.mp3'
    },
    {
      name: 'Me hirió el pecado',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Me-hirio-el-pecado.mp3'
    },
    {
      name: 'Moisés de Leví',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Moises-de-Levi.mp3'
    },
    {
      name: 'Nueva vida',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Nueva-vida.mp3'
    },
    {
      name: 'Oh María',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Oh-Maria.mp3'
    },
    {
      name: 'Oh precioso jardín de oración',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Oh-precioso-jardin-de-oracion.mp3'
    },
    {
      name: 'Padre Nuestro',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Padre-Nuestro.mp3'
    },
    {
      name: 'Precipitación',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Precipitacion.mp3'
    },
    {
      name: 'Quién es esa estrella',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Quien-es-esa-estrella.mp3'
    },
    {
      name: 'Quisiera yo ser ángel',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Quisiera-yo-ser-angel.mp3'
    },
    {
      name: 'Roque Rojas',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Roque-Rojas.mp3'
    },
    {
      name: 'Santo espíritu desciende',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Santo-espiritu-desciende.mp3'
    },
    {
      name: 'Santo Santo Santo',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Santo-Santo-Santo.mp3'
    },
    {
      name: 'Silencio',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Silencio.mp3'
    },
    {
      name: 'Un gran salvador es Jesús el Señor',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Un-gran-salvador-es-Jesus-el-Senor.mp3'
    },
    {
      name: 'Viva Elías',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Viva-Elias.mp3'
    },
    {
      name: 'Volemos volemos',
      path: 'https://iglesiaeliasista.org.mx/wp-content/uploads/2024/05/Volemos-volemos.mp3'
    }
   
  ];

  activeTrack: Track = null as any;
  player: Howl  = null as any;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', { static: false })
  range!: IonRange;
  loading: HTMLIonLoadingElement | undefined;
  

  constructor(private loadingCtrl: LoadingController) { }

  start(track: Track){
    this.presentLoading('Descargando coro...');
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.loading?.dismiss();
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgess();
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.player.play();
  }

  togglePlayer(pause: Boolean){
    this.isPlaying = !pause;
    if(pause){
      this.player?.pause();
    } else {
      this.player?.play();
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if( index != this.playlist.length -1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0])
    }
  }

  prev() {

    let index = this.playlist.indexOf(this.activeTrack);
    if( index > 0 ){
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1])
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




  ngOnInit() {

    loading: null as any;
  }

  async presentLoading(message: string){
    this.loading = await this.loadingCtrl.create({
      message
    });
    return this.loading.present();
  }

}
