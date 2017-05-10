import {Component, Input, OnInit} from "@angular/core";
import {Receta} from "../../../receta.model";
import {RecetaServicio} from "../../../../servicios/receta.servicio";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;
  @Input() idReceta: number;

  verOeditar: boolean;

  constructor(private _recetaServicio:RecetaServicio){}

  ngOnInit() {

    this._recetaServicio.verOeditar.subscribe((condicion)=> {this.verOeditar = condicion
    console.log(this.verOeditar)});

  }

  onVerReceta(){
    this._recetaServicio.verOeditar.next(true);
  }

}
