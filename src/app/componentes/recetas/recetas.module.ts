import {NgModule} from "@angular/core";
import {DetalleDeRecetaComponent} from "./detalle-de-receta/detalle-de-receta.component";
import {EditarRecetaComponent} from "./editar-receta/editar-receta.component";
import {ListaDeRecetasComponent} from "./lista-de-recetas/lista-de-recetas.component";
import {RecetaVaciaComponent} from "./receta-vacia/receta-vacia.component";
import {RecetaComponent} from "./lista-de-recetas/receta/receta.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecetasComponent} from "./recetas.component";
import {RecetasRutasModule} from "./recetas-rutas.module";
import {Filtro} from "../../compartido/filtrar.pipe";
import {RecortarTexto} from "../../compartido/recortarTexto.pipe";


@NgModule({

  declarations: [
    DetalleDeRecetaComponent,
    EditarRecetaComponent,
    ListaDeRecetasComponent,
    RecetaComponent,
    RecetasComponent,
    RecetaVaciaComponent,
    Filtro,
    RecortarTexto
  ],
  imports: [ReactiveFormsModule, CommonModule, RecetasRutasModule,FormsModule],
  exports: []
})

export class RecetasModule {

}
