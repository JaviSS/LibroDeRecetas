import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecetasComponent} from "./recetas.component";
import {EditarRecetaComponent} from "./editar-receta/editar-receta.component";
import {DetalleDeRecetaComponent} from "./detalle-de-receta/detalle-de-receta.component";
import {AuthGuardServicio} from "../../servicios/auth-guard.servicio";

const rutas: Routes = [
  {
    path: '', component: RecetasComponent,
    children: [
      {path: 'nuevareceta', component: EditarRecetaComponent, canActivate: [AuthGuardServicio]},
      {path: ':id', component: DetalleDeRecetaComponent},
      {path: ':id/editar', component: EditarRecetaComponent, canActivate: [AuthGuardServicio]}
    ]
  }];

@NgModule({

  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]

})

export class RecetasRutasModule {

}
