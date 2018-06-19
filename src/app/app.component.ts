import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router){
    auth.user$.subscribe(user => {
      //Se o usuario deslogar, nao o objeto de usuario vai estar vazio
      //Por isso nos temos esta condicao para fazer o redirecionamento
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
      //Em projetos maiores, seria uma boa pratica arranjar uma forma do
      //usuario se desinscrever, pois se o usuario constinuar inscrito
      //vai vazar memória do sistema
    })
  }
}
