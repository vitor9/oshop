import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Estamos vazando nossa implementacao para quem esta fora.
  //Porque o tipo deste user$ é observable de firebase.user
  //A abstracao correta seria(segundo puristas), é de:
  //Definir nossa própria classe de usuário e escrever
  //nosso código estruturado e mapear os objetos de firebase.User
  //em nosso objeto de usuario. Mas no noss caso é desnecessario,
  //porque estamos construindo nossa aplicacao para o firebase
  //e este é o escopo de nossa aplicacao e realizar essa abstracao
  //sera uma complexidade desnecessária
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  // Pode-se instanciar um novo objeto aqui em service porque nao iremos
  // fazer testes unitarios nesta classe/servico. Iremos realizar testes
  //unitarios em nosso componente. Porque este servico eh mais sobre integracao
  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
