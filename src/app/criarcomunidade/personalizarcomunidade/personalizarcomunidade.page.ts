import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ComunidadesService } from '../../services/comunidades.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personalizarcomunidade',
  templateUrl: './personalizarcomunidade.page.html',
  styleUrls: ['./personalizarcomunidade.page.scss'],
})
export class PersonalizarcomunidadePage implements OnInit {

  privacidade: any;
  comunidadesService: ComunidadesService;
  topics:any = [
    { name:'Jogos', slug: 'jogos' },
    { name:'Animes', slug: 'animes' },
    { name:'Filmes', slug: 'filmes' },
    { name:'Séries', slug: 'series' },
    { name:'Músicas', slug: 'musicas' },
    { name:'Programação', slug: 'programacao' },
    { name:'Quadrinhos', slug: 'quadrinhos' }
  ];
  nome?: string = null;
  assuntos?: string = null;
  descricao?: string = null;

  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.privacidade = this.router.getCurrentNavigation().extras.state.privacidade;
      }
    });
    this.comunidadesService = new ComunidadesService(http);
  }

  async criarComunidade() {
    let navigationExtras: NavigationExtras = {
      state: {
        nome: this.nome,
        assuntos: this.assuntos,
        descricao: this.descricao,
        privacidade: this.privacidade
      }
    };
    if(this.descricao) {
      await this.comunidadesService.criarComunidade(this.nome, this.assuntos, this.privacidade, this.descricao);
      this.router.navigate(['criarcomunidade/personalizarcomunidade/concluido'], navigationExtras);
    } else {
      await this.comunidadesService.criarComunidade(this.nome, this.assuntos, this.privacidade);
      this.router.navigate(['criarcomunidade/personalizarcomunidade/concluido'], navigationExtras);
    }
  }

  ngOnInit() {
  }

}
