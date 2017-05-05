import {Component, Input, OnInit} from "@angular/core";
import {Receta} from "../../receta.model";
import {ListaDeLaCompraServicio} from "../../../servicios/lista-de-la-compra.servicio";
import {RecetaServicio} from "../../../servicios/receta.servicio";

@Component({
  selector: 'app-detalle-de-receta',
  templateUrl: './detalle-de-receta.component.html',
  styleUrls: ['./detalle-de-receta.component.css']
})
export class DetalleDeRecetaComponent implements OnInit {

  @Input() receta: Receta;

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
  }

  insertarIngredientesEnLaListaDeLaCompra() {
    this._recetaServicio.insertarIngredientesEnLaListaDeLaCompra(this.receta.ingredientes);
  }
}
