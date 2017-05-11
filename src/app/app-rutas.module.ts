import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecetasComponent} from "app/componentes/recetas.component";
import {ListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/lista-de-la-compra.component";
import {DetalleDeRecetaComponent} from "./componentes/recetas/detalle-de-receta/detalle-de-receta.component";
import {EditarRecetaComponent} from "./componentes/recetas/editar-receta/editar-receta.component";
import {RegistroComponent} from "./componentes/autenticacion/registro/registro.component";


const rutas: Routes = [
  {path: '', redirectTo: '/recetas', pathMatch: 'full'},

  {
    path: 'recetas', component: RecetasComponent,
    children: [
      {path: 'nuevareceta', component: EditarRecetaComponent},
      {path: ':id', component: DetalleDeRecetaComponent},
      {path: ':id/editar', component: EditarRecetaComponent}
    ]
  },

  {path: 'listadelacompra', component: ListaDeLaCompraComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRutasModule {

}
