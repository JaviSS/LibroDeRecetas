import {Component, OnInit} from "@angular/core";
import {Receta} from "../../receta.model";
import {RecetaServicio} from "../../../servicios/receta.servicio";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-detalle-de-receta',
  templateUrl: './detalle-de-receta.component.html',
  styleUrls: ['./detalle-de-receta.component.css']
})
export class DetalleDeRecetaComponent implements OnInit {
  receta: Receta;
  idReceta:number;

  constructor(private _recetaServicio: RecetaServicio, private actualRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.receta = this._recetaServicio.getRecetaPorId(+this.actualRoute.snapshot.params['id']);
    this.actualRoute.params.subscribe(
      (params:Params) => {
        this.idReceta = +params['id'];
        this.receta = this._recetaServicio.getRecetaPorId(this.idReceta);
      }
    );
  }

  insertarIngredientesEnLaListaDeLaCompra() {
    this._recetaServicio.insertarIngredientesEnLaListaDeLaCompra(this.receta.ingredientes);
  }
}
