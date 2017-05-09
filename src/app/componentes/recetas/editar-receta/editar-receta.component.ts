import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent implements OnInit {

  idReceta: number;
  modoEdicion = false;

  constructor(private actualRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actualRoute.params.subscribe(
      (params:Params) => {
        this.modoEdicion = (params['editar'] != null);
        this.idReceta = +params['id'];
      }
    )
  }

}
