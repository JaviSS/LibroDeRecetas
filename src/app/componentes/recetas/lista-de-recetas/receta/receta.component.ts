import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receta} from "../../../receta.model";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;
  @Output() recetaSeleccionadaEvento = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  recetaSeleccionada(){
    this.recetaSeleccionadaEvento.emit();
  }

}
