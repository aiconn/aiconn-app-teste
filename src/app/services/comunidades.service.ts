import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComunidadesService {

  constructor(private http: HttpClient) {
    this.atualizaComunidades();
  }

  private comunidades;

  public getComunidades() {
    return this.comunidades;
  }

  atualizaComunidades() {
    this.comunidades = [];
    this.http.get<any[]>("http://localhost/api/comunidades/get.php")
      .subscribe(dados => {
        dados.forEach(item => {
          this.comunidades.push(item);
        })
      })
  }

  public async criarComunidade(nome: String, assuntos: String, privacidade: String, descricao?: String) {
    this.http.get<any[]>(
      `http://localhost/api/comunidades/create.php?nome=${nome.toString()}
        &assuntos=${assuntos.toString()}
        &privacidade=${privacidade.toString()}
        ${descricao ? `&descricao=${descricao}` : ''}`
    )
    .subscribe( () => {
      this.atualizaComunidades();
    })
  }

  public async deletarComunidade(id: Number) {
    this.http.delete<any[]>("http://localhost/api/comunidades/delete.php?id=" + id)
      .subscribe(dados => {
        this.atualizaComunidades();
      })
  }
}
