import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Receta} from "../../receta.model";
import {RecetaServicio} from "../../../servicios/receta.servicio";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-lista-de-recetas',
  templateUrl: './lista-de-recetas.component.html',
  styleUrls: ['./lista-de-recetas.component.css']
})
export class ListaDeRecetasComponent implements OnInit {
  recetas: Receta[];

  actualizarRecetas: Subscription;

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
    this.recetas = this._recetaServicio.getRecetas();
    this.actualizarRecetas = this._recetaServicio.recetasActualizadas
      .subscribe(
        (recetas:Receta[]) => {
          this.recetas = recetas;
        }
      );
  }

}

