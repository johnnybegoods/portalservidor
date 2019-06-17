import { Credencial } from './credencial';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = true;

  constructor(private router: Router, 
    private http: HttpClient
  ) {   
    this.showMenuEmitter.emit(false);
  }

  fazerLogin(credencial: Credencial){
    return this.http.post<any>('http://localhost:8080/PortalService-web/login',
    JSON.stringify(credencial)).pipe(
      map(dados =>{
        if(dados){
          localStorage.setItem('currentUser', dados);
          this.showMenuEmitter.emit(true);
          this.usuarioAutenticado = true;
          this.router.navigate(['/portal']);
        }
        else{
          this.usuarioAutenticado = false;
        }
        return dados;
      })
    );
  }

  userIsAuth(){
    return this.usuarioAutenticado;
  }

}
