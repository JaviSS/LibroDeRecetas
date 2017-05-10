import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecetaServicio} from "../../servicios/receta.servicio";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private recetaServicio:RecetaServicio){
  }

  onRecetas(){
    this.recetaServicio.verOeditar.next(false);
  }

}
