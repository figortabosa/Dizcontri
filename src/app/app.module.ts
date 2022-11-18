
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


export const appRouters: Routes = [
  {path : '', component : PessoaPesquisaComponent},
  {path : 'pessoa', component : PessoaPesquisaComponent},
  {path : 'pessoaCadastro', component : PessoaCadastroComponent},
  {path : 'pessoaCadastro/:codigo', component : PessoaCadastroComponent},
  {path : 'lancamento', component : LancametosPesquisaComponent},
  {path : 'lancamentoCadastro', component :LancamentoCadastroComponent},
  {path : 'paginaNaoEncontrada', component : PaginaNaoEncontradaComponent},
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
    CoreModule,
    ToastModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
