import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AutenticacionServicio} from "./autenticacion.servicio";

@Injectable()
export class AuthGuardServicio implements CanActivate{

  constructor(private _autenticacionServicio:AutenticacionServicio) { }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._autenticacionServicio.usuarioAutenticado();
  }
}
