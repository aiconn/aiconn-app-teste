import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComunidadesService } from '../services/comunidades.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {
  
  comunidades?: any = null;
  comunidadesService: ComunidadesService;

  constructor(private http:HttpClient, public actionSheetController: ActionSheetController) {
    this.comunidadesService = new ComunidadesService(http);
  }
  
  ionViewWillEnter() {
    this.atualizaComunidades()
    console.log('ionViewWillEnter log')
  }

  atualizaComunidades() {
    this.http.get<any[]>("http://localhost/api/comunidades/get.php")
      .subscribe(dados => {
        this.comunidades = dados;
        console.log(this.comunidades)
      })
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Excluir',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          await this.deletarComunidade(id);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async deletarComunidade(id: number) {
    await this.comunidadesService.deletarComunidade(id).then(() => {
      this.atualizaComunidades();
    })
  }

  ngOnInit() {
  }

}
