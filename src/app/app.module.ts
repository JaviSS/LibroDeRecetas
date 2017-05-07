import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RecetasComponent } from './componentes/recetas.component';
import { ListaDeRecetasComponent } from './componentes/recetas/lista-de-recetas/lista-de-recetas.component';
import { DetalleDeRecetaComponent } from './componentes/recetas/detalle-de-receta/detalle-de-receta.component';
import { ListaDeLaCompraComponent } from './componentes/lista-de-la-compra/lista-de-la-compra.component';
import { EditarListaDeLaCompraComponent } from './componentes/lista-de-la-compra/editar-lista-de-la-compra/editar-lista-de-la-compra.component';
import { RecetaComponent } from './componentes/recetas/lista-de-recetas/receta/receta.component';
import {DropdownDirectiva} from "./compartido/dropdown.directiva";
import {ListaDeLaCompraServicio} from "./servicios/lista-de-la-compra.servicio";
import {AppRutasModule} from "./app-rutas.module";
import { RecetaVaciaComponent } from './componentes/recetas/receta-vacia/receta-vacia.component';
import { EditarRecetaComponent } from './componentes/recetas/editar-receta/editar-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    RecetasComponent,
    ListaDeRecetasComponent,
    DetalleDeRecetaComponent,
    ListaDeLaCompraComponent,
    EditarListaDeLaCompraComponent,
    RecetaComponent,
    DropdownDirectiva,
    RecetaVaciaComponent,
    EditarRecetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRutasModule
  ],
  providers: [ListaDeLaCompraServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
