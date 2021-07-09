import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EsqueceusenhaComponent } from './modal/esqueceusenha/esqueceusenha.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public showPassword: boolean = false;

  constructor(public modalController: ModalController) { }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async showModalSenha() {
    const modal = await this.modalController.create({
      component: EsqueceusenhaComponent,
      cssClass: 'modal-esqueceusenha',
      swipeToClose: true
    });

    return await modal.present();
  }

}
