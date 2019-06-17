import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autorizacao } from './Autorizacao';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  
  resp$: Observable<any>;

  constructor(private http: HttpClient) { }

  inserirAutorizacao(aut: Autorizacao){
    return this.http.post<any>('http://localhost:8080/PortalService-web/dados',
    JSON.stringify(aut));
  }
}
