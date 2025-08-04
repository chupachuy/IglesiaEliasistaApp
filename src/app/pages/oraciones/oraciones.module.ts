import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OracionesPageRoutingModule } from './oraciones-routing.module';

import { OracionesPage } from './oraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OracionesPageRoutingModule
  ],
  declarations: [OracionesPage]
})
export class OracionesPageModule {}
