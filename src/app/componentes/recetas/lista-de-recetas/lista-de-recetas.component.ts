import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Receta} from "../../receta.model";
import {RecetaServicio} from "../../../servicios/receta.servicio";

@Component({
  selector: 'app-lista-de-recetas',
  templateUrl: './lista-de-recetas.component.html',
  styleUrls: ['./lista-de-recetas.component.css']
})
export class ListaDeRecetasComponent implements OnInit {
  recetas: Receta[];

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
    this.recetas = this._recetaServicio.getRecetas();
  }

}
