import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionesPageRoutingModule } from './comunicaciones-routing.module';

import { ComunicacionesPage } from './comunicaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionesPageRoutingModule
  ],
  declarations: [ComunicacionesPage]
})
export class ComunicacionesPageModule {}
