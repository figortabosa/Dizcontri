import { Component, OnInit } from '@angular/core';
import { Lancamento } from './lancamentos';

@Component({
  selector: 'app-lancametos-pesquisa',
  templateUrl: './lancametos-pesquisa.component.html',
  styleUrls: ['./lancametos-pesquisa.component.css']
})
export class LancametosPesquisaComponent implements OnInit {

  listaLancamentos: Lancamento[] = [];

  constructor() { }

  ngOnInit(): void {

    this.listaLancamentos = [
        {tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: '30/06/2022',
          dataPagamento: '02/06/2022', valor: 6.50, pessoa: 'Padaria Jose'
      },
      {tipo: 'DESPESA', descricao: 'Compra de software', dataVencimento: '30/04/2022',
          dataPagamento: '', valor: 346.50, pessoa: 'Links'
      },
      {tipo: 'DESPESA', descricao: 'Compra de software', dataVencimento: '30/04/2022',
          dataPagamento: '', valor: 346.50, pessoa: 'Links'
      },
      {tipo: 'DESPESA', descricao: 'Compra de software', dataVencimento: '30/04/2022',
          dataPagamento: '', valor: 346.50, pessoa: 'Links'
      },
    ]

  }

}
