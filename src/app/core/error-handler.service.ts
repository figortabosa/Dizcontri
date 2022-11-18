import { PessoaPesquisaComponent } from './../pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(
    private toastr: ToastrService,
    private messageService: MessageService,
    ) { }


    handler(errorResponse: any) {
    let msg: string;
    if(typeof errorResponse === 'string'){
      msg = errorResponse;
    }else{
      try {
        msg =  errorResponse.error.mensagenUsuario

        this.toastr.error(msg,'Erro!');
       // this.messageService.add({severity:'error', summary: 'error', detail: msg})
      } catch (error) {

        console.log('Ocorreu um erro', errorResponse);
      }

    }
    }
  }

