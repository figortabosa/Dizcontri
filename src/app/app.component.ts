import { LoginService } from './seguranca/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PessoaService } from './pessoas/pessoa.service';
import { Component, NgModule, OnInit } from '@angular/core';
import {ToastModule} from 'primeng/toast';

import { MessageService, PrimeNGConfig, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService,ConfirmationService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private PessoaService: PessoaService,
    private messageService:MessageService,
    private primengConfig: PrimeNGConfig,
    private toastrService:ToastrService,
    private confirmationService:ConfirmationService,
    private loginService:LoginService,
    private router: Router
    ){

    };

  ngOnInit() {
    if(localStorage.getItem('token') == null) {
      this.router.navigate(['login'])
    }
  }


}
