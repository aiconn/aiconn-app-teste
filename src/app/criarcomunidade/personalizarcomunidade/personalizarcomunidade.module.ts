import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizarcomunidadePageRoutingModule } from './personalizarcomunidade-routing.module';

import { PersonalizarcomunidadePage } from './personalizarcomunidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizarcomunidadePageRoutingModule
  ],
  declarations: [PersonalizarcomunidadePage]
})
export class PersonalizarcomunidadePageModule {}
