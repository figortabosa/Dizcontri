import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
    constructor(private http : HttpClient, private toastr: ToastrService) { }

    usuarioUrl = 'http://localhost:8080/dizcontri-api/usuarios';

    salvar (usuario:Usuario):  Promise<any>{
        const headers = new Headers();
        headers.append('contentType','application/json')
    
        return this.http.post(this.usuarioUrl,usuario)
        .toPromise()
        .then(response =>response)
      }
  }