import {Component, OnDestroy, OnInit} from "@angular/core";
import {Ingrediente} from "../../compartido/ingrediente.model";
import {ListaDeLaCompraServicio} from "../../servicios/lista-de-la-compra.servicio";

@Component({
  selector: 'app-lista-de-la-compra',
  templateUrl: './lista-de-la-compra.component.html',
  styleUrls: ['./lista-de-la-compra.component.css']
})
export class ListaDeLaCompraComponent implements OnInit,OnDestroy {

  ingredientes: Ingrediente[];

  constructor(private _listaDeLaCompraServicio: ListaDeLaCompraServicio) {
  }

  ngOnInit() {
    this.ingredientes = this._listaDeLaCompraServicio.getIngredientes();
    this._listaDeLaCompraServicio.cambioEnIngredientes.subscribe(
      (ingredientes:Ingrediente[]) => this.ingredientes = ingredientes
    );
  }


  ngOnDestroy(): void {
    this._listaDeLaCompraServicio.cambioEnIngredientes.unsubscribe();
  }

  onEditar(id:number){
    this._listaDeLaCompraServicio.editarIngrediente.next(id);
  }

  onEliminar(id:number){
    this._listaDeLaCompraServicio.eliminarIngrediente(id);

  }

}
