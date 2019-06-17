import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cpf: string;
  mae: string;
  cel: string = "";
  senha: string = "";
  senha2: string = "";
  checar: boolean = false;

  teste(){
    alert(this.checar);
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

  maskPhone(e){
    e=e.replace(/\D/g,"");             //Remove tudo o que não é dígito
    e=e.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    e=e.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    this.cel = e;
  }

}
