import {Component, OnInit} from '@angular/core';
import {Ingrediente} from "../../compartido/ingrediente.model";

@Component({
  selector: 'app-lista-de-la-compra',
  templateUrl: './lista-de-la-compra.component.html',
  styleUrls: ['./lista-de-la-compra.component.css']
})
export class ListaDeLaCompraComponent implements OnInit {

  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10)
  ];

  insertarIngrediente(ingrediente: Ingrediente){
    this.ingredientes.push(ingrediente);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
