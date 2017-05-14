import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CabeceraComponent} from "./componentes/cabecera/cabecera.component";
import {ListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/lista-de-la-compra.component";
import {EditarListaDeLaCompraComponent} from "./componentes/lista-de-la-compra/editar-lista-de-la-compra/editar-lista-de-la-compra.component";
import {DropdownDirectiva} from "./compartido/dropdown.directiva";
import {ListaDeLaCompraServicio} from "./servicios/lista-de-la-compra.servicio";
import {AppRutasModule} from "./app-rutas.module";
import {RecetaServicio} from "./servicios/receta.servicio";
import {AutenticacionServicio} from "./servicios/autenticacion.servicio";
import {AuthGuardServicio} from "./servicios/auth-guard.servicio";
import {AutenticacionModule} from "./componentes/autenticacion/autenticacion.module";
import {RecetasModule} from "./componentes/recetas/recetas.module";

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaDeLaCompraComponent,
    EditarListaDeLaCompraComponent,
    DropdownDirectiva,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRutasModule,
    AutenticacionModule,
    RecetasModule,
  ],
  providers: [ListaDeLaCompraServicio, RecetaServicio, AutenticacionServicio, AuthGuardServicio],
  bootstrap: [AppComponent]
})
export class AppModule {
}
