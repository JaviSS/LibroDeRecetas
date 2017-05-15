import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListaDeLaCompraComponent} from "./lista-de-la-compra.component";


const rutas: Routes = [
  {path: 'listadelacompra', component: ListaDeLaCompraComponent},
];


@NgModule({

  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],

})

export class ListaDeLaCompraRutasModule {

}
