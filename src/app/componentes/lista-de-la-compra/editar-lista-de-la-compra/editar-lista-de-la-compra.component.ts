import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Ingrediente} from "../../../compartido/ingrediente.model";
import {ListaDeLaCompraServicio} from "../../../servicios/lista-de-la-compra.servicio";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-editar-lista-de-la-compra',
  templateUrl: './editar-lista-de-la-compra.component.html',
  styleUrls: ['./editar-lista-de-la-compra.component.css']
})
export class EditarListaDeLaCompraComponent implements OnInit, OnDestroy {

  subscipcionEditarIngrediente: Subscription;
  modoEditar: boolean = false;
  idIngrediente: number;
  ingredienteAeditar: Ingrediente;

  @ViewChild('ingredienteForm') if: NgForm;

  constructor(private _listaDeLaCompraServicio: ListaDeLaCompraServicio) {
  }

  ngOnInit() {
    this.subscipcionEditarIngrediente = this._listaDeLaCompraServicio.editarIngrediente.subscribe(
      (id: number) => {
        this.modoEditar = true;
        this.idIngrediente = id;
        this.ingredienteAeditar = this._listaDeLaCompraServicio.getIngredientePorId(id);
        this.if.setValue({
          nombreIngrediente: this.ingredienteAeditar.nombre,
          cantidad: this.ingredienteAeditar.cantidad
        });
      }
    );
  }

  nuevoIngrediente(formularioIngrediente: NgForm) {
    const ingrediente = new Ingrediente(
      formularioIngrediente.value.nombreIngrediente,
      formularioIngrediente.value.cantidad
    );
    if (this.modoEditar) {
      this._listaDeLaCompraServicio.actualizarIngrediente(this.idIngrediente, ingrediente);
    } else {
      this._listaDeLaCompraServicio.insertarIngrediente(ingrediente);
    }
    this.if.resetForm();
    this.modoEditar = false;
  }



  ngOnDestroy(): void {

    this.subscipcionEditarIngrediente.unsubscribe();

  }

}
