import {NgModule} from "@angular/core";
import {ListaDeLaCompraComponent} from "./lista-de-la-compra.component";
import {EditarListaDeLaCompraComponent} from "./editar-lista-de-la-compra/editar-lista-de-la-compra.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListaDeLaCompraRutasModule} from "./lista-de-la-compra-rutas.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [ListaDeLaCompraComponent,EditarListaDeLaCompraComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule,ListaDeLaCompraRutasModule],
  exports: []
})

export class ListaDeLaCompraModule {

}
