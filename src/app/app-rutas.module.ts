import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecetasComponent} from "app/componentes/recetas/recetas.component";
import {ListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/lista-de-la-compra.component";
import {DetalleDeRecetaComponent} from "./componentes/recetas/detalle-de-receta/detalle-de-receta.component";
import {EditarRecetaComponent} from "./componentes/recetas/editar-receta/editar-receta.component";
import {RegistroComponent} from "./componentes/autenticacion/registro/registro.component";
import {IniciarSesionComponente} from "./componentes/autenticacion/login/iniciar-sesion.componente";
import {AuthGuardServicio} from "./servicios/auth-guard.servicio";


const rutas: Routes = [
  {path: '', redirectTo: '/recetas', pathMatch: 'full'},

  {
    path: 'recetas', component: RecetasComponent,
    children: [
      {path: 'nuevareceta', component: EditarRecetaComponent, canActivate:[AuthGuardServicio]},
      {path: ':id', component: DetalleDeRecetaComponent},
      {path: ':id/editar', component: EditarRecetaComponent, canActivate:[AuthGuardServicio]}
    ]
  },

  {path: 'listadelacompra', component: ListaDeLaCompraComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: IniciarSesionComponente}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRutasModule {

}
