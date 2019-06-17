import { Competencia } from './Competencia';
import { Pessoa } from './../../Pessoa';
export class Autorizacao{
    id: number;
    funcionario: Pessoa;
    data_ocorrencia_: string;
    data_autorizacao_: string;
    responsavel: Pessoa;
    justificativa: string;
    horas_: string;
    competencia: Competencia;
}