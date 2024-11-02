import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredicasPageRoutingModule } from './predicas-routing.module';

import { PredicasPage } from './predicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredicasPageRoutingModule
  ],
  declarations: [PredicasPage]
})
export class PredicasPageModule {}
