import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-criarcomunidade',
  templateUrl: './criarcomunidade.page.html',
  styleUrls: ['./criarcomunidade.page.scss'],
})
export class CriarcomunidadePage implements OnInit {

  constructor(private router: Router) { }
 
  openCustomizePage(privacidade) {
    let navigationExtras: NavigationExtras = {
      state: {
        privacidade: privacidade
      }
    };
    this.router.navigate(['criarcomunidade/personalizarcomunidade'], navigationExtras);
  }

  ngOnInit() {
  }

}
