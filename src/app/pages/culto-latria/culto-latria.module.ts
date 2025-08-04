import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultoLatriaPageRoutingModule } from './culto-latria-routing.module';

import { CultoLatriaPage } from './culto-latria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultoLatriaPageRoutingModule
  ],
  declarations: [CultoLatriaPage]
})
export class CultoLatriaPageModule {}
