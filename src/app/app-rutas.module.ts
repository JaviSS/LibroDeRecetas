import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecetasComponent} from "app/componentes/recetas.component";
import {ListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/lista-de-la-compra.component";
import {DetalleDeRecetaComponent} from "./componentes/recetas/detalle-de-receta/detalle-de-receta.component";
import {RecetaVaciaComponent} from "./componentes/recetas/receta-vacia/receta-vacia.component";
import {EditarRecetaComponent} from "./componentes/recetas/editar-receta/editar-receta.component";


const rutas: Routes = [
  {path: '', redirectTo: '/recetas', pathMatch: 'full'},

  {
    path: 'recetas', component: RecetasComponent,
    children: [
      {path: '', component: RecetaVaciaComponent},
      {path: 'nuevareceta', component: EditarRecetaComponent},
      {path: ':id', component: DetalleDeRecetaComponent},
      {path: ':id/editar', component: EditarRecetaComponent}
    ]
  },

  {path: 'listadelacompra', component: ListaDeLaCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRutasModule {

}
