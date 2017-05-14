import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/lista-de-la-compra.component";
import {RegistroComponent} from "./componentes/autenticacion/registro/registro.component";
import {IniciarSesionComponente} from "./componentes/autenticacion/login/iniciar-sesion.componente";


const rutas: Routes = [
  {path: '', redirectTo: '/recetas', pathMatch: 'full'},

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
