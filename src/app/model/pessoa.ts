
import { Contato } from './contato';
import { Endereco } from './endereco';


export class Pessoa {
  codigo(codigo: any) {
    throw new Error('Method not implemented.');
  }

  cod_pessoa!: Number;
  nome!: String;
  cpf!: String;
  data_nascimento!: Date;
  sexo!: String;
  endereco  = new Endereco();
  contato = new Contato();

}
