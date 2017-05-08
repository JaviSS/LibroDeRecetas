import {Component, OnInit} from "@angular/core";
import {Receta} from "./receta.model";
import {RecetaServicio} from "../servicios/receta.servicio";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers: [RecetaServicio]
})
export class RecetasComponent implements OnInit {

  recetaSeleccionada: Receta;

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {


  }


}
