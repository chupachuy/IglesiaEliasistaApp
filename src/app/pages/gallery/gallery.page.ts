import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { DomSanitizer } from '@angular/platform-browser';

register();

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})




export class GalleryPage implements OnInit {

  imagenUrl = 'https://iglesiaeliasista.org.mx/wp-content/uploads/2016/12/logoeleasista-300x192.jpg';

  constructor(private sanitizer: DomSanitizer) { 
  }

  getSafeImageUrl(imagenUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagenUrl);
  }

  ngOnInit() {
  }

}
