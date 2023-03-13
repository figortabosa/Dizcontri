import { Usuario } from './../../model/usuario';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  usuario = new Usuario();

  ngOnInit(): void {
  }

  login(usuario:Usuario) {
    this.loginService.login(this.usuario)
  }

}
