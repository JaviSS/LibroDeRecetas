import {Receta} from "../componentes/recetas/receta.model";
import {Injectable} from "@angular/core";
import {ListaDeLaCompraServicio} from "./lista-de-la-compra.servicio";
import {Ingrediente} from "../compartido/ingrediente.model";
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";

import "rxjs/Rx";
import {AutenticacionServicio} from "./autenticacion.servicio";


@Injectable()
export class RecetaServicio {

  recetasActualizadas = new Subject<Receta[]>();
  verOeditar = new Subject<boolean>();

  recetas: Receta[] = [];


  constructor(private _listaDeLaCompraService: ListaDeLaCompraServicio,
              private _firebaseServicio: Http,
              private _autenticacionServicio: AutenticacionServicio) {

    console.log('----> receta servicio constructor');
    _autenticacionServicio.usuarioAutenticadoSub
      .subscribe((tokenListoSub: boolean) => {
        console.log('tokenListoSub ' + tokenListoSub);
        if(tokenListoSub) this.cargarRecetasDesdeServidor();
      });
  }


  getRecetas() {
    return this.recetas.slice();
  }

  getRecetaPorId(indice: number) {
    return this.recetas[indice];
  }

  insertarIngredientesEnLaListaDeLaCompra(ingredientes: Ingrediente[]) {
    this._listaDeLaCompraService.insertarIngredientes(ingredientes);
  }

  insertarReceta(receta: Receta) {
    this.recetas.push(receta);
    this.recetasActualizadas.next(this.recetas.slice());
    this.guardarRecetasEnServidor();
  }

  actualizarReceta(id: number, receta: Receta) {
    this.recetas[id] = receta;
    this.recetasActualizadas.next(this.recetas.slice());
    this.guardarRecetasEnServidor();
  }

  eliminarReceta(id: number) {
    this.recetas.splice(id, 1);
    this.recetasActualizadas.next(this.recetas.slice());
    this.guardarRecetasEnServidor();
  }

  guardarRecetasEnServidor() {
    this._firebaseServicio.put('https://blabla-112fc.firebaseio.com/recetas.json?auth='
      + this._autenticacionServicio.getAutenticacionToken(), this.recetas).subscribe(
      ((res) => console.log(res))
    );
  }

  guardarRecetasEnServidorBK() {
    this._firebaseServicio.put('https://blabla-112fc.firebaseio.com/recetasbk.json', this.recetas).subscribe(
      ((res) => console.log(res))
    );
  }

  cargarRecetasDesdeServidor() {
    console.log('cargarRecetasDesdeServidor llamada');
    const tk = this._autenticacionServicio.getAutenticacionToken();
    if (!tk) return;
    return this._firebaseServicio.get('https://blabla-112fc.firebaseio.com/recetas.json?auth='
      + tk).toPromise()
      .then((res: Response) => {
        console.log(res);
        this.recetas = res.json();
        this.recetasActualizadas.next(this.recetas);
      });
  }

}
