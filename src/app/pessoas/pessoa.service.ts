import { Pessoa } from './../model/pessoa';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/dizcontri-api/pessoas';
  pessoasPorNomeUrl = 'http://localhost:8080/dizcontri-api/pessoas/pesquisaPorNome';

  constructor(private http : HttpClient, private toastr: ToastrService) { }

  pesquisar(filtro:any): Promise<any> {

    const params = new URLSearchParams();
    const headers = new HttpHeaders();
   return this.http.get(`${this.pessoasUrl}`)
    .toPromise()
    .then(Response=> Response)
  }


  adicionar (pessoa:Pessoa):  Promise<any>{
    const headers = new Headers();
    headers.append('contentType','application/json')

    return this.http.post(this.pessoasUrl,pessoa)
    .toPromise()
    .then(response =>response)
  }

  atualizar(pessoa:Pessoa): Promise<any>{
    const headers = new Headers();
    headers.append('contentType','application/json')

    return this.http.put(`${this.pessoasUrl}/${pessoa.cod_pessoa}`,pessoa)
    .toPromise()
    .then(response=> {
      const pessoaAlterada = response as Pessoa;

      this.converterStringsParaDatas(pessoaAlterada);
      return pessoaAlterada;
    });
  }

  excluir(pessoa:Pessoa) {
    return this.http.delete(`${this.pessoasUrl}/${pessoa.cod_pessoa}`)
    .toPromise()
    .then(() => null);
  }

  buscarPorCodigo(codigo:number): Promise<any>{
  return this.http.get(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const pessoa = response as Pessoa;

        this.converterStringsParaDatas(pessoa);
        return pessoa;
      });
  }
  pesquisarPorNome(nome:any): Promise<any> {

    return this.http.get(`${this.pessoasPorNomeUrl}?nome=${nome}`)
    .toPromise()
    .then(response => response)
  }

  private converterStringsParaDatas(pessoa: Pessoa) {
    pessoa.data_nascimento = moment(pessoa.data_nascimento,
        'YYYY-MM-DD').toDate();

    }
}
