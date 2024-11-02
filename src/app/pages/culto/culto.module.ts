import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultoPageRoutingModule } from './culto-routing.module';

import { CultoPage } from './culto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultoPageRoutingModule
  ],
  declarations: [CultoPage]
})
export class CultoPageModule {}
