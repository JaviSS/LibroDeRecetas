import {Component, OnInit} from "@angular/core";
import {Receta} from "./receta.model";
import {RecetaServicio} from "../../servicios/receta.servicio";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: []
})
export class RecetasComponent implements OnInit {

  recetaSeleccionada: boolean = false;

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
    this._recetaServicio.verOeditar.subscribe((condicion:boolean)=> this.recetaSeleccionada = condicion);
  }


}
