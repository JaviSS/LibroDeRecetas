import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegistroComponent} from "./registro/registro.component";
import {IniciarSesionComponente} from "./login/iniciar-sesion.componente";



const rutas: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: IniciarSesionComponente}
];



@NgModule({
  imports : [RouterModule.forChild(rutas)],
  exports : [RouterModule]
})

export class AutenticacionRutasModule{

}
