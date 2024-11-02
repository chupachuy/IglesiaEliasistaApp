import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videoUrl: any[] = [
    {
      title: 'Coro 22. Al Rey de los Cielos IEMAR',
      video: 'https://www.youtube.com/embed/VVZnCJjWefg'
    },
    {
      title: 'Coro 32. Bellísima María IEMAR',
      video: 'https://www.youtube.com/embed/9WyxwI-6T8I'
    },
    {
      title: 'Coro 33. Bienvenidos IEMAR',
      video: 'https://www.youtube.com/embed/ao6uTbJb4Jw'
    },
    
    {
      title: 'Coro 48. Consagrados IEMAR',
      video: 'https://www.youtube.com/embed/4-b6bdguAkU'
    },
    {
      title: 'Coro 61. El Mundo Perdido IEMAR',
      video: 'https://www.youtube.com/embed/_WJqaECIvGs'
    },
    {
      title: 'Coro 64. El Séptimo Cielo IEMAR',
      video: 'https://www.youtube.com/embed/g17GQRB4Eyk'
    },
    {
      title: 'Coro 75. Faro de Luz IEMAR',
      video: 'https://www.youtube.com/embed/yRsinU1TIek'
    },
    {
      title: 'Coro 77. Gloria al Padre IEMAR',
      video: 'https://www.youtube.com/embed/yf-bxYXJe5k'
    },
    {
      title: 'Coro 79. Gracias Altísimo te den IEMAR',
      video: 'https://www.youtube.com/embed/e4zu5Ua8rJ0'
    },
    {
      title: 'Coro 82. Graciosa Azucena IEMAR',
      video: 'https://www.youtube.com/embed/2kgU1ULQHlk'
    },
    {
      title: 'Coro 88. Hoy Que Te Encontré IEMAR',
      video: 'https://www.youtube.com/embed/Y5sCxlg9M14'
    },
    {
      title: 'Coro 90. Iglesia de Elías IEMAR',
      video: 'https://www.youtube.com/embed/-ssprxbNXuM'
    },
    {
      title: 'Coro 98. La Era Elías IEMAR',
      video: 'https://www.youtube.com/embed/ympPaF7UZlU'
    },
    {
      title: 'Coro 100. Roque Rojas IEMAR',
      video: 'https://www.youtube.com/embed/4qpaEUejbgs'
    },
    {
      title: 'Coro 102. La Marcha Eliasista IEMAR',
      video: 'https://www.youtube.com/embed/Rr-cKO8yykE'
    },
    {
      title: 'Coro 104. La Mujer Hermosa Vestida del Sol IEMAR',
      video: 'https://www.youtube.com/embed/GTU_mz_SPXs'
    },
    {
      title: 'Coro 107. La Nueva Era IEMAR',
      video: 'https://www.youtube.com/embed/4OndunfwioU'
    },
    {
      title: 'Coro 109. La Siembra IEMAR',
      video: 'https://www.youtube.com/embed/eGiJPo4WO-o'
    },
    {
      title: 'Coro. 118 Lluvias de Gracia IEMAR',
      video: 'https://www.youtube.com/embed/1xe3diXZLaU'
    },
    {
      title: 'Coro 119. Los 144,OOO Marcados IEMAR',
      video: 'https://www.youtube.com/embed/fsMEdxxp1kw'
    },
    {
      title: 'Coro 125. Los Tres Mesías IEMAR',
      video: 'https://www.youtube.com/embed/IYYojBKZ51o'
    },
    {
      title: 'Coro 127. Marchar Israel IEMAR',
      video: 'https://www.youtube.com/embed/stefsz12Hag'
    },
    {
      title: 'Coro 130. Me Hirió el Pecado IEMAR',
      video: 'https://www.youtube.com/embed/d7DvMMMk5SY'
    },
    {
      title: 'Coro 133. Moisés de Leví IEMAR',
      video: 'https://www.youtube.com/embed/n2DicYLGdkE'
    },
    {
      title: 'Coro 140. Nueva Vida IEMAR',
      video: 'https://www.youtube.com/embed/Qcd7s88rgHY'
    },
    {
      title: 'Coro 143. ¡Oh! Maria IEMAR',
      video: 'https://www.youtube.com/embed/FzuLnCwWD8k'
    },
    {
      title: 'Coro 146. ¡Oh! Precioso Jardín de Oración IEMAR',
      video: 'https://www.youtube.com/embed/YwkgZfevNOA'
    },
    {
      title: 'Coro 149 Padre Nuestro IEMAR',
      video: 'https://www.youtube.com/embed/EqCqWiP9cjM'
    },
    {
      title: 'Coro 155. Precipitación IEMAR',
      video: 'https://www.youtube.com/embed/e6jfnw_NPag'
    },
    {
      title: 'Coro 161. Quién es esa Estrella IEMAR',
      video: 'https://www.youtube.com/embed/rn5rR2e24dA'
    },
    {
      title: 'Coro 165. Quisiera yo ser Ángel IEMAR',
      video: 'https://www.youtube.com/embed/t2H3ux8f4C4'
    },
    {
      title: 'Coro 169. Santo Espíritu Desciende IEMAR',
      video: 'https://www.youtube.com/embed/OptLqC4-srE'
    },
    {
      title: 'Coro 170. Santo, Santo, Santo IEMAR',
      video: 'https://www.youtube.com/embed/9Hm09Nc1rg8'
    },
    {
      title: 'Coro 172. Silencio IEMAR',
      video: 'https://www.youtube.com/embed/NEpZPv3KSEs'
    },
    {
      title: 'Coro 183. Un Gran Salvador es Jesús el Señor IEMAR',
      video: 'https://www.youtube.com/embed/ZX2a82P0xjI'
    },
    {
      title: 'Coro 188. Viva Elías IEMAR',
      video: 'https://www.youtube.com/embed/B39Zhiqymug'
    },
    {
      title: 'Coro 190. Volemos, Volemos IEMAR',
      video: 'https://www.youtube.com/embed/1k2QoziECxQ'
    }
  ]


  constructor(private sanitizer: DomSanitizer) { }

  showVideo(videoUrl: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl)
   }

  ngOnInit() {
  }

}
