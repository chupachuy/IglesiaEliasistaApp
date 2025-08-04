import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GacetaPageRoutingModule } from './gaceta-routing.module';

import { GacetaPage } from './gaceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GacetaPageRoutingModule
  ],
  declarations: [GacetaPage]
})
export class GacetaPageModule {}
