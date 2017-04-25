import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';
import { ListaDeRecetasComponent } from './componentes/recetas/lista-de-recetas/lista-de-recetas.component';
import { DetalleDeRecetaComponent } from './componentes/recetas/detalle-de-receta/detalle-de-receta.component';
import { ListaDeLaCompraComponent } from './componentes/lista-de-la-compra/lista-de-la-compra.component';
import { EditarListaDeLaCompraComponent } from './componentes/lista-de-la-compra/editar-lista-de-la-compra/editar-lista-de-la-compra.component';
import { RecetaComponent } from './componentes/recetas/receta/receta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    RecetasComponent,
    ListaDeRecetasComponent,
    DetalleDeRecetaComponent,
    ListaDeLaCompraComponent,
    EditarListaDeLaCompraComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }