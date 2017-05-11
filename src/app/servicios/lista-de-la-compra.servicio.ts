import {Ingrediente} from "../compartido/ingrediente.model";
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
export class ListaDeLaCompraServicio {

  ingredientes: Ingrediente[] = [
    new Ingrediente('Manzanas', 5),
    new Ingrediente('Tomates', 10),
    new Ingrediente('Café', 100),
    new Ingrediente('Pizzas', 15)
  ];

  //ingredientes: Ingrediente[];

  //constructor(private _firebaseServicio:Http){
  //  this.cargarIngredientesDesdeServidor().subscribe((ingredientes:Ingrediente[]) => this.ingredientes = ingredientes);
  //  this.guardarIngredientesEnServidor();

  //}

  cambioEnIngredientes = new Subject<Ingrediente[]>();

  editarIngrediente = new Subject<number>();


  insertarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
   //x this.guardarIngredientesEnServidor();

  }

  insertarIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes.push(...ingredientes);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
    //this.guardarIngredientesEnServidor();

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
    //this.guardarIngredientesEnServidor();

    }

  eliminarIngrediente(id: number) {
    this.ingredientes.splice(id, 1);
    this.cambioEnIngredientes.next(this.ingredientes.slice());
   // this.guardarIngredientesEnServidor();

  }

  //guardarIngredientesEnServidor() {
  //  this._firebaseServicio.put('https://blabla-112fc.firebaseio.com/ingredientes.json', this.ingredientes2).subscribe(
  //    ((res) => console.log(res))
  //  );
  //}

  //cargarIngredientesDesdeServidor() {
  //  return this._firebaseServicio.get('https://blabla-112fc.firebaseio.com/ingredientes.json')
  //   .map((res: Response) => {
  //      return res.json();
  //    });
  //}

}
