import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-esqueceusenha',
  templateUrl: './esqueceusenha.component.html',
  styleUrls: ['./esqueceusenha.component.scss'],
})

export class EsqueceusenhaComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    this.modalController.dismiss();
  }

}