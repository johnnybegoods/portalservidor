import { Pessoa } from './../../../Pessoa';
import { Autorizacao } from './../Autorizacao';
import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { PersistenceService } from '../persistence.service';



@Component({
  selector: 'app-nova-autorizacao',
  templateUrl: './nova-autorizacao.component.html',
  styleUrls: ['./nova-autorizacao.component.css']
})
export class NovaAutorizacaoComponent implements OnInit {
  public pessoa: Pessoa[];
  pessoa$: Observable<Pessoa[]>;
  autorizacao: Autorizacao = new Autorizacao();
  pnome: string;
  funcionario: Pessoa;
  docorrencia: string;
  hora: string = "";
  just: string = "";
  justValido: boolean = false;
  pgto: boolean = false;
  banco: boolean = false;
  formValido: boolean = false;
  showSpinner: boolean = true;

  constructor(private dados: DadosService, 
    private spinner: NgxSpinnerService,
    private insert: PersistenceService) {
    let atual: Date = new Date();
    let teste = new Date(atual).toISOString().split('T')[0];
    this.docorrencia = teste;
  }

  ngOnInit() {
    this.pessoa$ = this.dados.getFuncionarios();
    //this.dados.getFuncionarios().subscribe(dados=> this.pessoa = dados);

  }

  
  onSubmit(){

    let validate = true;
    if(this.pgto == false && this.banco == false){
      alert("Uma opção de pagamento ou banco de horas deve ser escolhida");
      validate = false;
    }

    if(this.hora == "00:00" || this.hora == ""){
      alert("Não há horas a serem lançadas (entrada 00:00)");
      validate = false;
    }

    if(this.pnome == null){
      alert("Nenhum Funcionário Selecionado");
      validate = false;
    }

    if(validate){
      this.autorizacao.funcionario = this.funcionario;
      this.autorizacao.data_ocorrencia_ = this.docorrencia;
      this.autorizacao.responsavel = this.funcionario;
      this.autorizacao.justificativa = this.just;
      this.autorizacao.horas_ = this.hora.toString();
      //alert(this.hora);
      
      this.insert.inserirAutorizacao(this.autorizacao).subscribe(dados => {
        if(dados != null){
          console.log(dados);
          alert("Dados enviados com sucesso !");
        }
      
        
      });
    }
    
  }



  selectRadio(event){
    if(event === 'pgto'){
      this.pgto = true;
      this.banco = false;
    }
    if(event === 'banco'){
      this.banco = true;
      this.pgto = false;
    }
  }
  

  selectPessoa(evt){
    let p: Pessoa = new Pessoa();
    p = evt;
    this.funcionario = p;
    this.pnome = p.nome;

  }

  carregando(){
    
    setInterval(()=>
      this.verificaObj(),
      100
    );
  }

  verificaObj(){
    if (this.pessoa$ != null){
      this.showSpinner = false;
    }
  }

}
