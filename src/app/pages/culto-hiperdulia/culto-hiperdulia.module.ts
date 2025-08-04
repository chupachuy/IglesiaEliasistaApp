import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CultoHiperduliaPageRoutingModule } from './culto-hiperdulia-routing.module';

import { CultoHiperduliaPage } from './culto-hiperdulia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CultoHiperduliaPageRoutingModule
  ],
  declarations: [CultoHiperduliaPage]
})
export class CultoHiperduliaPageModule {}
