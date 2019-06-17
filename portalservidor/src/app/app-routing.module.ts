import { NovaAutorizacaoComponent } from './portal/autorizaextra/nova-autorizacao/nova-autorizacao.component';
import { AutorizaextraComponent } from './portal/autorizaextra/autorizaextra/autorizaextra.component';
import { AuthGuardService } from './guard/auth.guard.service';
import { PortalComponent } from './portal/portal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent},
  {path: 'autorizaextra', component: AutorizaextraComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
