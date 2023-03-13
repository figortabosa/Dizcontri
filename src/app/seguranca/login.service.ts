import { Router } from '@angular/router';
import { Usuario } from './../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private router: Router) { }

  urlLogin = 'http://localhost:8080/dizcontri-api/login'

 login(usuario:Usuario){
  return this.http.post(this.urlLogin,JSON.stringify(usuario)).subscribe(data=>{
    var toke = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

    localStorage.setItem("token",toke);

    this.router.navigate(['pessoa'])
    console.info(JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1])
  },
  error => {
    console.error("Erro ao fazer login!");
    alert("Acesso Negado!")
  }
  );
 }
}
