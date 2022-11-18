import { ErrorHandlerService } from './../../core/error-handler.service';
import { catchError } from 'rxjs';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'src/app/model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import {Message,MessageService, PrimeNGConfig} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  providers: [MessageService,ConfirmationService],
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  [x: string]: any;

  pessoa = new Pessoa();
  pessoas!: Pessoa[];
  nome!: string;
  PessoaService: any;
  msgs1!: Message[];
  msgs: Message[] = [];
  position!: string;


  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private errorHandlerService: ErrorHandlerService,
    private toastrService:ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const codigoPessoa = this.route.snapshot.params['codigo'];
    const patNomePessoa = this.route.snapshot.params['partNome'];
    if(codigoPessoa) {
      this.pesquisaPessoa(codigoPessoa)
    }
    this.pesquisar();
  }


  pesquisaPessoa(codigo:number){
    this.PessoaService.buscarPorCodigo(codigo)
    .then((pessoa: Pessoa) => {
      this.pessoa = pessoa;
    }).catchError((erro: any) => this.errorHandlerService.handler(erro))
  }

pesquisar() {
  this.pessoaService.pesquisar({nome: this.nome})
  .then(pessoas=> {
    return this.pessoas = pessoas;
  }).catch(erro => this.errorHandlerService.handler(erro));
}

pesquisaPorNome(partnome:string){
  this.pessoaService.pesquisarPorNome(partnome)
  .then(pessoas=>{
    return this.pessoas = pessoas;
  })
}

excluir(pessoa:Pessoa){
  this.pessoas = this.pessoas.filter((a)=> pessoa.nome !== a.nome);
  this.pessoaService.excluir(pessoa);
  this.addMessages();
}

addMessages() {
  this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'}
  ]
}

confirm2(pessoa:Pessoa) {
  this.confirmationService.confirm({
      message: 'Deseja realmente excluir este registro?',
      header: 'Confirma exclusão!',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.pessoas = this.pessoas.filter((a)=> pessoa.nome !== a.nome);
        this.pessoaService.excluir(pessoa);
        this.showSuccess();
      },
      reject: () => {
          this.showError();
      },
      key: "positionDialog"
  });
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Excluido com Sucesso!'});
}
showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Acão Rejeitada!'});
}

}
