import {Ingrediente} from "../compartido/ingrediente.model";
import {Subject} from "rxjs/Subject";
export class ListaDeLaCompraServicio {

  cambioEnIngredientes = new Subject<Ingrediente[]>();

  editarIngrediente = new Subject<number>();

  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10),
    new Ingrediente('Café', 100),
    new Ingrediente('Pizzas', 15)
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


  getIngredientePorId(id: number) {
    return this.ingredientes[id];
  }

  actualizarIngrediente(id: number, nuevoIngrediente: Ingrediente) {
    this.ingredientes[id] = nuevoIngrediente;
    this.cambioEnIngredientes.next(this.ingredientes.slice());
  }

  eliminarIngrediente(id: number) {
    this.ingredientes.splice(id, 1);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
  }

}
