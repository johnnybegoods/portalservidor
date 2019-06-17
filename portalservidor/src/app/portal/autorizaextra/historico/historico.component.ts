import { Component, OnInit } from '@angular/core';
import { HistoricoService } from './historico.service';
import { Competencia } from '../Competencia';
import { Observable } from 'rxjs';
import { Autorizacao } from '../Autorizacao';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  private competencias$: Observable<Competencia[]>;
  private autorizacoes$: Observable<Autorizacao[]>;

  constructor(private comp: HistoricoService) { }

  ngOnInit() {
    this.competencias$ = this.comp.getCompetencias();
    this.autorizacoes$ = this.comp.getAutorizacoes(this.competencias$[0]);
  }

}
