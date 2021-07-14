import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarcomunidadePageRoutingModule } from './criarcomunidade-routing.module';

import { CriarcomunidadePage } from './criarcomunidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarcomunidadePageRoutingModule
  ],
  declarations: [CriarcomunidadePage]
})
export class CriarcomunidadePageModule {}
