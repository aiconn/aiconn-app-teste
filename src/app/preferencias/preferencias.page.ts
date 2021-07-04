import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.page.html',
  styleUrls: ['./preferencias.page.scss'],
})
export class PreferenciasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topics:any = [
    {name:'Jogos', active:false, size: 6},
    {name:'Animes', active:false, size: 6},
    {name:'Filmes', active:false, size: 4},
    {name:'Séries', active:false, size: 4},
    {name:'Músicas', active:false, size: 4},
    {name:'Programação', active:false, size: 6},
    {name:'Quadrinhos', active:false, size: 6}
  ];

  selectedTopics:any = 0;
  aux:any = 0;

  selectTopic(topic) {
    topic.active = !topic.active;

    this.getSelectedTopics();
  }

  getSelectedTopics() {
    this.aux = 0;
    this.topics.map(topic =>{
      topic.active ? this.aux++ : null;
    })

    this.selectedTopics = this.aux;
  }

}
