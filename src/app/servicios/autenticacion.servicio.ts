import {Injectable} from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AutenticacionServicio {

  constructor() {
  }

  registrarConEmail(email: string, passw: string): boolean {
    let ok: boolean = false;
    firebase.auth().createUserWithEmailAndPassword(email, passw)
      .then(() => {
        ok = true;
      })
      .catch((err) => {
        console.log(err);
        ok = false;
      });
    return ok;
  }


  loginConEmail(email: string, passw: string): boolean {
    let ok: boolean = false;
    firebase.auth().signInWithEmailAndPassword(email, passw)
      .then(() => {
        ok = true;
      })
      .catch((err) => {
        console.log(err);
        ok = false;
      });
    return ok;
  }


}
