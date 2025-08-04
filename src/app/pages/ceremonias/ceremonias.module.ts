import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeremoniasPageRoutingModule } from './ceremonias-routing.module';

import { CeremoniasPage } from './ceremonias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeremoniasPageRoutingModule
  ],
  declarations: [CeremoniasPage]
})
export class CeremoniasPageModule {}
