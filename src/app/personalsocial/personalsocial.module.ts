import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalsocialPageRoutingModule } from './personalsocial-routing.module';

import { PersonalsocialPage } from './personalsocial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalsocialPageRoutingModule
  ],
  declarations: [PersonalsocialPage]
})
export class PersonalsocialPageModule {}
