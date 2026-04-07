import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class IntroPage implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/principal');
    }, 3000);
  }

}
