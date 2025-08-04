import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultoDuliaPageRoutingModule } from './culto-dulia-routing.module';

import { CultoDuliaPage } from './culto-dulia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultoDuliaPageRoutingModule
  ],
  declarations: [CultoDuliaPage]
})
export class CultoDuliaPageModule {}
