import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {DropdownDirectiva} from "./compartido/dropdown.directiva";
import {AppRutasModule} from "./app-rutas.module";
import {AutenticacionModule} from "./componentes/autenticacion/autenticacion.module";
import {ListaDeLaCompraModule} from "./componentes/lista-de-la-compra/lista-de-la-compra.module";
import {CoreModule} from "./componentes/core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirectiva,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRutasModule,
    AutenticacionModule,
    ListaDeLaCompraModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
