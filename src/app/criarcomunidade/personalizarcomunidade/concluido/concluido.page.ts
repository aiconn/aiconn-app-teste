import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-concluido',
  templateUrl: './concluido.page.html',
  styleUrls: ['./concluido.page.scss'],
})
export class ConcluidoPage implements OnInit {

  comunidade: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.comunidade = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  voltar() {
    this.router.navigate(['/comunidades']);
  }

  ngOnInit() {
  }

}
