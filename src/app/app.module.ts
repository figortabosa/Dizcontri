import { LoginService } from './seguranca/login.service';

import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoaService } from './pessoas/pessoa.service';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancametosPesquisaComponent } from './lancamentos/lancametos-pesquisa/lancametos-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LoginComponent } from './seguranca/login/login.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { HeaderInterceptorService, HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuarioCadastroComponent } from './usuarios/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './usuarios/usuario-pesquisa/usuario-pesquisa.component';
import { UsuarioService } from './usuarios/usuario.service';


export const appRouters: Routes = [
  {path : '', component : LoginComponent},
  {path : 'pessoa', component : PessoaPesquisaComponent},
  {path : 'pessoaCadastro', component : PessoaCadastroComponent},
  {path : 'pessoaCadastro/:codigo', component : PessoaCadastroComponent},
  {path : 'lancamento', component : LancametosPesquisaComponent},
  {path : 'lancamentoCadastro', component :LancamentoCadastroComponent},
  {path : 'usuarioCadastro', component :UsuarioCadastroComponent},
  {path : 'usuario', component :UsuarioPesquisaComponent},
  {path : 'paginaNaoEncontrada', component : PaginaNaoEncontradaComponent},
  {path : 'login', component : LoginComponent},
  {path : '**', redirectTo : 'paginaNaoEncontrada'}
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MenuModule,
    RippleModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,

    LancamentosModule,
    PessoasModule,
    SegurancaModule,
    CoreModule,
    UsuariosModule,
    ToastModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    HttpClientModule,
    HttpInterceptorModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [PessoaService,LoginService,HeaderInterceptorService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
