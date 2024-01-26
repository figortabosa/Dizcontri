import { Router } from '@angular/router';
import { Usuario } from './../../model/usuario';
import { LoginService } from './../login.service';
import { Component, ElementRef, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

  }

  usuario = new Usuario();

  ngOnInit() {

  }

  login(usuario:Usuario) {
    this.loginService.login(this.usuario)
  }

}
