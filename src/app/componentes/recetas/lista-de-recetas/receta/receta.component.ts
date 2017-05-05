import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receta} from "../../../receta.model";
import {RecetaServicio} from "../../../../servicios/receta.servicio";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;

  constructor(private _recetaServicio: RecetaServicio) { }

  ngOnInit() {
  }

  recetaSeleccionada(){
    this._recetaServicio.recetaSeleccionada.emit(this.receta);
  }

}
