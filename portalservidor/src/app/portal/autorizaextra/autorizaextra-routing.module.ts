import { AutorizaLoteComponent } from './autoriza-lote/autoriza-lote.component';
import { AutrespComponent } from './autresp/autresp.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { FechamentoComponent } from './fechamento/fechamento.component';
import { HistoricoComponent } from './historico/historico.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaAutorizacaoComponent } from './nova-autorizacao/nova-autorizacao.component';

const routesAut: Routes = [
  {path: '', component: InicioComponent, outlet: 'aut'},
  {path: 'nova', component: NovaAutorizacaoComponent, outlet: 'aut'}, 
  {path: 'hist', component: HistoricoComponent, outlet: 'aut'},
  {path: 'fechamento', component: FechamentoComponent, outlet: 'aut'},
  {path: 'relatorios', component: RelatoriosComponent, outlet: 'aut'},
  {path: 'autresp', component: AutrespComponent, outlet: 'aut'},
  {path: 'lote', component: AutorizaLoteComponent, outlet: 'aut'}
]

@NgModule({
  imports: [RouterModule.forChild(routesAut)],
  exports: [RouterModule]
})
export class AutorizaextraRoutingModule { }
