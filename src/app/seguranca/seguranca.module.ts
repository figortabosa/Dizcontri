import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

//import { AuthHttp } from 'angular2-jwt';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],

  providers: [

  ]

})
export class SegurancaModule { }
