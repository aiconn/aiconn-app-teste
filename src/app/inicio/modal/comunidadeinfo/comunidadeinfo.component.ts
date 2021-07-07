import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comunidadeinfo',
  templateUrl: './comunidadeinfo.component.html',
  styleUrls: ['./comunidadeinfo.component.scss'],
})
export class Comunidadeinfo implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    this.modalController.dismiss();
  }

}
