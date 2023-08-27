import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalsocialPage } from './personalsocial.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalsocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalsocialPageRoutingModule {}
