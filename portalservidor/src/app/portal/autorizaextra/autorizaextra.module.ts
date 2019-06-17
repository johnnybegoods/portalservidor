import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizaextraRoutingModule } from './autorizaextra-routing.module';
import { AutorizaextraComponent } from './autorizaextra/autorizaextra.component';
import { MenuComponent } from './menu/menu.component';
import { NovaAutorizacaoComponent } from './nova-autorizacao/nova-autorizacao.component';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoricoComponent } from './historico/historico.component';
import { FechamentoComponent } from './fechamento/fechamento.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { AutrespComponent } from './autresp/autresp.component';
import { AutorizaLoteComponent } from './autoriza-lote/autoriza-lote.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AutorizaextraComponent, MenuComponent, NovaAutorizacaoComponent, TabelaFuncionariosComponent, InicioComponent, HistoricoComponent, FechamentoComponent, RelatoriosComponent, AutrespComponent, AutorizaLoteComponent],
  imports: [
    CommonModule,
    AutorizaextraRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule
  ]
})
export class AutorizaextraModule { }
