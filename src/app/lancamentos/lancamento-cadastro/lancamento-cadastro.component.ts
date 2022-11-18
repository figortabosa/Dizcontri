import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label:'Receita', value:'RECEITA'},
    {label:'Despesa', value:'DESPESA'}
  ]

  categorias = [
    {label: 'Alimentação', value: '1'},
    {label: 'Transporte', value: '2'}
  ]

  pessoas = [
    {label: 'João da Silva', value: '1'},
    {label: 'Sebastião de Souza', value: '2'},
    {label: 'Maria dos Santos', value: '2'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
