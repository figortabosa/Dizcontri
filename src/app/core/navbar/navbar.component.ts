import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private messageService: MessageService,private primengConfig: PrimeNGConfig, private router: Router) {}

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
          },

          {
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this.sair();
          }
          }
      ]},
  ];
}

update() {
  this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
  this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
}

  public sair() {
    localStorage.clear();
    this.router.navigate(['login'])
}

 esconderBarraMenu(){
  if (localStorage.getItem('token') !== null) {
    return false;
   }else {
    return true;
   }
 }


}
