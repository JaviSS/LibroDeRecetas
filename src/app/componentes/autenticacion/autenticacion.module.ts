import {NgModule} from "@angular/core";
import {IniciarSesionComponente} from "./login/iniciar-sesion.componente";
import {RegistroComponent} from "./registro/registro.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AutenticacionRutasModule} from "./autenticacion-rutas.module";


@NgModule({
  declarations : [IniciarSesionComponente,RegistroComponent],
  imports :[FormsModule,CommonModule,AutenticacionRutasModule],

})

export class AutenticacionModule{

}
