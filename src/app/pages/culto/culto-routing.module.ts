import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultoPage } from './culto.page';

const routes: Routes = [
  {
    path: '',
    component: CultoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultoPageRoutingModule {}
