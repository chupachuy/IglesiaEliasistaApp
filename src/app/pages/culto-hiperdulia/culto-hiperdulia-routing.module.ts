import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultoHiperduliaPage } from './culto-hiperdulia.page';

const routes: Routes = [
  {
    path: '',
    component: CultoHiperduliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultoHiperduliaPageRoutingModule {}
