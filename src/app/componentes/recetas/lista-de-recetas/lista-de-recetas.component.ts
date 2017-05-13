import {Component, OnDestroy, OnInit} from "@angular/core";
import {Receta} from "../receta.model";
import {RecetaServicio} from "../../../servicios/receta.servicio";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-lista-de-recetas',
  templateUrl: './lista-de-recetas.component.html',
  styleUrls: ['./lista-de-recetas.component.css']
})
export class ListaDeRecetasComponent implements OnInit, OnDestroy {
  recetas: Receta[];

  actualizarRecetas: Subscription;

  constructor(private _recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
    this.recetas = this._recetaServicio.getRecetas();
    console.log('---> lista de recetas ngoninit');
    this.actualizarRecetas = this._recetaServicio.recetasActualizadas
      .subscribe(
        (recetas: Receta[]) => {
          this.recetas = recetas;
          console.log('---> actualizar recetas resuelta');
        }
      );
  }

  ngOnDestroy() {
    this.actualizarRecetas.unsubscribe();
  }

}

