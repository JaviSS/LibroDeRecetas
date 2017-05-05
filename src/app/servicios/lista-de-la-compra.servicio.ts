import {Ingrediente} from "../compartido/ingrediente.model";
import {EventEmitter} from "@angular/core";
export class ListaDeLaCompraServicio{

  cambioEnIngredientes = new EventEmitter<Ingrediente[]>();

  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10)
  ];

  insertarIngrediente(ingrediente: Ingrediente){
    this.ingredientes.push(ingrediente);
    this.cambioEnIngredientes.emit(this.ingredientes.slice());
  }

  insertarIngredientes(ingredientes: Ingrediente[]){
    this.ingredientes.push(...ingredientes);
    this.cambioEnIngredientes.emit(this.ingredientes.slice());
  }


  getIngredientes(){
    return this.ingredientes.slice();
  }


}
