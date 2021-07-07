import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Comunidadeinfo } from './modal/comunidadeinfo/comunidadeinfo.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async showModalComunidade() {
    const modal = await this.modalController.create({
      component: Comunidadeinfo,
      cssClass: 'modal-comunidade',
      swipeToClose: true
    });

    return await modal.present();
  }

}
