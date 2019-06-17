import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, delay } from 'rxjs/operators';
import { Pessoa } from '../../../Pessoa';
import { Observable } from 'rxjs';
import { NovaAutorizacaoComponent } from './nova-autorizacao.component';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private pessoa: Pessoa;

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    
    return this.http.get<Pessoa[]>('http://localhost:8080/PortalService-web/dados').pipe(
      tap(console.log)
    );
  }
}
