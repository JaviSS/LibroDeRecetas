import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";

@Injectable()
export class AutenticacionServicio {

  autenticacionToken: string;
  usuarioAutenticadoSub = new Subject<boolean>();

  constructor(private router: Router) {

    console.log("----> iniciado autentication service -");
  }

  registrarConEmail(email: string, passw: string): boolean {
    let ok: boolean = false;
    firebase.auth().createUserWithEmailAndPassword(email, passw)
      .then((res) => {
        console.log(res);
        ok = true;
      })
      .catch((err) => {
        console.log(err);
      });
    return ok;
  }


  loginConEmail(email: string, passw: string): boolean {
    let ok: boolean = false;

    firebase.auth().signInWithEmailAndPassword(email, passw)
      .then((res) => {
        ok = true;
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then((token: string) => {
          console.log('token--> '+ token);
            this.autenticacionToken = token;
            this.usuarioAutenticadoSub.next(true);
            console.log('enviando tokenlisto');
          }).catch(err => {
          console.log(err);
          this.usuarioAutenticadoSub.next(false);
        });
      })
      .catch((err) => {
        console.log(err);
        this.usuarioAutenticadoSub.next(false);
      });
    return ok;
  }

  cerrarSesion() {
    firebase.auth().signOut();
    this.autenticacionToken = null;
    this.usuarioAutenticadoSub.next(false);
  }

  getAutenticacionToken() {
    firebase.auth().currentUser.getToken()
      .then((res: string) => {
        this.autenticacionToken = res;

      })
      .catch(err => console.log(err));
    return this.autenticacionToken;
  }

  usuarioAutenticado(): boolean {
    return this.autenticacionToken != null;
  }

  getImagenUsuario(): string {
    console.log(firebase.auth().currentUser.photoURL);
    return firebase.auth().currentUser.photoURL;
  }

}
