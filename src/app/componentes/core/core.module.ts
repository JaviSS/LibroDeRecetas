import {NgModule} from "@angular/core";
import {CabeceraComponent} from "./cabecera/cabecera.component";
import {InicioComponent} from "./inicio/inicio.component";
import {AppRutasModule} from "../../app-rutas.module";
import {CommonModule} from "@angular/common";
import {ListaDeLaCompraServicio} from "../../servicios/lista-de-la-compra.servicio";
import {RecetaServicio} from "../../servicios/receta.servicio";
import {AutenticacionServicio} from "../../servicios/autenticacion.servicio";
import {AuthGuardServicio} from "../../servicios/auth-guard.servicio";

@NgModule({
  imports: [
    AppRutasModule,
    CommonModule
  ],

  exports: [
    AppRutasModule,
    CabeceraComponent
  ],

  declarations: [
    CabeceraComponent,
    InicioComponent
  ],

  providers: [
    ListaDeLaCompraServicio,
    RecetaServicio,
    AutenticacionServicio,
    AuthGuardServicio
  ],


})

export class CoreModule {

}
