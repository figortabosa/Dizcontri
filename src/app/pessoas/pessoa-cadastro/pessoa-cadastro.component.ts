import { Observable } from 'rxjs';
import { ErrorHandlerService } from './../../core/error-handler.service';

import { FormControl, FormGroup } from '@angular/forms';
import { Contato } from './../../model/contato';
import { Endereco } from './../../model/endereco';


import { PessoaService } from '../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Sexo {
 label: string
 value: string
}

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  providers: [MessageService],
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();
  endereco = new Endereco();
  contatos: Array<Contato> = [];
  sexos: Sexo[];
  msgs1!: Message[];
  sexo!: '';

  constructor(
    private PessoaService:PessoaService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private ErrorHandlerService: ErrorHandlerService,
    private toastrService:ToastrService,
    private toastModule: ToastModule
    )
  {
    this.sexos = [
      {label: 'MASCULINO', value: 'M'},
      {label: 'FEMININO', value: 'F'}
    ];

  }

  ngOnInit(): void {
    const codigoPessoa = this.route.snapshot.params['codigo'];
    if(codigoPessoa) {
      this.pesquisaPessoa(codigoPessoa)
    }
  }

  get editando() {
    return Boolean(this.pessoa.cod_pessoa)
  }

  pesquisaPessoa(codigo:number){
    this.PessoaService.buscarPorCodigo(codigo)
    .then(pessoa => {
      this.pessoa = pessoa;
    })
  }
  salvar(pessoa:Pessoa) {
    if(this.editando){
      this.atualizar(pessoa)
    } else {
      this.adicionar(pessoa)
    }
  }

  adicionar(pessoa:Pessoa) {
    this.PessoaService.adicionar(this.pessoa)
    .then(()=>{
      this.novo(pessoa);
      this.toastrService.success('cadastro realizado com sucesso', 'Sucesso')
      this.router.navigate(['/pessoa'])
    }).catch(erro => this.ErrorHandlerService.handler(erro))
    }


  addMessagesSalvar() {
    this.msgs1 = [
        {severity:'success', summary:'Success', detail:'Message Content'}
    ]
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Salvo com Sucesso!'});
  }

  showErro() {
    this.messageService.add({severity:'error', summary: 'error', detail: 'Erro ao Salvar Registro'});
  }

  atualizar(pessoa:Pessoa) {
    this.PessoaService.atualizar(this.pessoa)
    .then(pessoa =>{
      this.pessoa = pessoa;
      this.toastrService.success('Edição realizada com Sucesso!', 'Sucesso')
      this.router.navigate(['/pessoa'])
    })
  }

  novo(pessoa:Pessoa){
    this.pessoa = new Pessoa();
    this.router.navigate(['/pessoaCadastro'])
  }

}
