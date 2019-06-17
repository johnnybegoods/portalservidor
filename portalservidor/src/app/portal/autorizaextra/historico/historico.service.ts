import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competencia } from '../Competencia';
import { tap } from 'rxjs/operators';
import { Autorizacao } from '../Autorizacao';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  getCompetencias(){
    return this.http.get<Competencia[]>
        ('http://localhost:8080/PortalService-web/historico').pipe(
          tap(console.log)
    );
  }

  getAutorizacoes(c: Competencia){
    return this.http.get<Autorizacao[]>('http://localhost:8080/PortalService-web/autorizacoes')
    .pipe(
      tap(console.log)
    );
  }

}
