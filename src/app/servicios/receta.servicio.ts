import {Receta} from "../componentes/receta.model";
import {Injectable, OnInit} from "@angular/core";
import {ListaDeLaCompraServicio} from "./lista-de-la-compra.servicio";
import {Ingrediente} from "../compartido/ingrediente.model";
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";

import "rxjs/Rx";


@Injectable()
export class RecetaServicio {

  recetasActualizadas = new Subject<Receta[]>();
  verOeditar = new Subject<boolean>();

  recetas: Receta[]=[];

  constructor(private _listaDeLaCompraService: ListaDeLaCompraServicio, private _firebaseServicio: Http) {

    this.cargarRecetasDesdeServidor().subscribe((recetas: Receta[]) => {
      console.log('cargandorecetas');
      this.recetas = recetas;
      this.recetasActualizadas.next(this.recetas);
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
    this._firebaseServicio.put('https://blabla-112fc.firebaseio.com/recetas.json', this.recetas).subscribe(
      ((res) => console.log(res))
    );
  }

  cargarRecetasDesdeServidor() {
    return this._firebaseServicio.get('https://blabla-112fc.firebaseio.com/recetas.json')
      .map((res: Response) => {
        return res.json();
      });
  }


}
