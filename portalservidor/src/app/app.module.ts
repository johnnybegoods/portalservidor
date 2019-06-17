import { AutorizaextraModule } from './portal/autorizaextra/autorizaextra.module';
import { AuthGuardService } from './guard/auth.guard.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth.service';
import { PortalComponent } from './portal/portal.component';
import { NgxCpfCnpjModule } from  'ngx-cpf-cnpj';
import { AutorizaextraRoutingModule } from './portal/autorizaextra/autorizaextra-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    CadastroComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxCpfCnpjModule,
    AutorizaextraModule,
    AutorizaextraRoutingModule,
    NgxSpinnerModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
