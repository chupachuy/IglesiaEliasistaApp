import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorosPage } from './coros.page';

const routes: Routes = [
  {
    path: '',
    component: CorosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorosPageRoutingModule {}
