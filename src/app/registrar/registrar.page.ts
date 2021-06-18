import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {

  public showPassword: boolean = false;

  constructor() { }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

}
