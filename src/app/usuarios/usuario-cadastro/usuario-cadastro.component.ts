import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from '../usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

usuario = new Usuario();

  constructor(
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router,
    private UsuarioService: UsuarioService,
    private messageService: MessageService,
    private ErrorHandlerService: ErrorHandlerService,
    private toastrService:ToastrService,
    private toastModule: ToastModule
  ) { }

  ngOnInit(): void {
  }
  salvar(usuario:Usuario){
    this.UsuarioService.salvar(usuario)
    .then(()=>{
     this.novo(usuario);
     this.toastrService.success('cadastro realizado com sucesso', 'Sucesso')
    })
  }

  novo(usuario:Usuario){
    this.usuario = new Usuario();
  }
}
