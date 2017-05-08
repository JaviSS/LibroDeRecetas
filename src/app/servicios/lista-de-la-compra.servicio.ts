import {Ingrediente} from "../compartido/ingrediente.model";
import {Subject} from "rxjs/Subject";
export class ListaDeLaCompraServicio {

  cambioEnIngredientes = new Subject<Ingrediente[]>();

  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10)
  ];

  insertarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
  }

  insertarIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes.push(...ingredientes);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
  }


  getIngredientes() {
    return this.ingredientes.slice();
  }


}
