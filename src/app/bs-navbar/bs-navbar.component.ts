import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  //Não precisamos mais definir esse campo de usuário porque
  //Porque podemos acessar de AuthService.
  // user$: Observable<firebase.User>;

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }

}
