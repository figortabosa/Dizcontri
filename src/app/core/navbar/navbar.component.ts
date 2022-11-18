import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Pessoa',
      items: [{
          label: ' Lista de Pessoas',
           icon: 'pi pi-users',
           routerLink: ['/pessoa'],
      },
      {
          label: 'Cadastrar Pessoa',
          icon: 'pi pi-user-plus',
          routerLink: ['/pessoaCadastro']
      }
      ]},
      {
          label: 'Lançamentos',
          items: [{
              label: 'Lista Lançamentos',
              icon: 'pi pi-external-link',
              routerLink: '/lancamento'
          },
          {
              label: 'Cadastrar Lancamentos',
              icon: 'pi pi-send',
              routerLink: 'lancamentoCadastro'
          }
      ]}
  ];
}

update() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
  this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}

}
