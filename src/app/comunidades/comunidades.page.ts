import { Component, OnInit } from '@angular/core';
import { ComunidadesService } from '../services/comunidades.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {
  
  comunidadesService: ComunidadesService;
  comunidades?: any;

  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) {
    this.comunidadesService = new ComunidadesService(http);
    this.comunidades = this.comunidadesService.getComunidades();
  }
  
  ionViewWillEnter() {
    this.comunidades = this.comunidadesService.getComunidades();
    console.log('ionViewWillEnter log')
    console.log(this.comunidadesService.getComunidades())
    console.log(this.comunidades)
  }

  debug() {
    console.log(this.comunidadesService.getComunidades())
    console.log(this.comunidades)
  }

  ngOnInit() {
  }

}
