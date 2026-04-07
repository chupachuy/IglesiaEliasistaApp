import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { DomSanitizer } from '@angular/platform-browser';

register();

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
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
