import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorosPageRoutingModule } from './coros-routing.module';

import { CorosPage } from './coros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorosPageRoutingModule,
  ],
  declarations: [CorosPage]
})
export class CorosPageModule {}
