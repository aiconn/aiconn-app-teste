import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComunidadesService {

  constructor(private http: HttpClient) { }

  public async criarComunidade(nome: string, assuntos: string, privacidade: string, descricao?: string) {
    
    this.http.get<any[]>(
      `http://localhost/api/comunidades/create.php?nome=${nome.toString()}
        &assuntos=${assuntos.toString()}
        &privacidade=${privacidade.toString()}
        ${descricao ? `&descricao=${descricao.toString()}` : ''}`
    )
    .subscribe()
  }

  public async deletarComunidade(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.delete<any[]>("http://localhost/api/comunidades/delete.php?id=" + id)
        .subscribe( async () => {
          resolve();
          console.log('resolve delete')
        }, () => {
          reject();
          console.log('reject delete')
        }
      )
    })
  }
}
