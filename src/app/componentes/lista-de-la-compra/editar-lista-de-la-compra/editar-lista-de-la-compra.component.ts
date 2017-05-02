import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingrediente} from "../../../compartido/ingrediente.model";

@Component({
  selector: 'app-editar-lista-de-la-compra',
  templateUrl: './editar-lista-de-la-compra.component.html',
  styleUrls: ['./editar-lista-de-la-compra.component.css']
})
export class EditarListaDeLaCompraComponent implements OnInit {

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('cantidadInput') cantidadInput: ElementRef;
  @Output() nuevoIngredienteEvento = new EventEmitter<Ingrediente>();

  constructor() {
  }

  ngOnInit() {
  }

  nuevoIngrediente() {
    const ingrediente = new Ingrediente(
      this.nombreInput.nativeElement.value,
      this.cantidadInput.nativeElement.value
    );
    this.nuevoIngredienteEvento.emit(ingrediente);
  }



}
