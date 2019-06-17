import { Router } from '@angular/router';
import { Authenticate } from './authenticate';
import { Credencial } from './credencial';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { Http } from '@angular/http';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credencial: Credencial = new Credencial();
  private auth: string;
  
  onSubmit(){
    this.authService.fazerLogin(this.credencial)
      .subscribe(dados => this.auth = dados);
      console.log(localStorage.getItem("currentUser"));
      
    /*
    this.authService.fazerLogin(this.credencial);
      this.http.post('http://localhost:8080/PortalService-web/login', 
      JSON.stringify(this.credencial))
      .subscribe(dados => console.log(dados)); */
  }

  constructor(
    private authService: AuthService,
    private http: Http,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
