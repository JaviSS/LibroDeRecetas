import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {InicioComponent} from "./componentes/core/inicio/inicio.component";


const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'recetas', loadChildren: './componentes/recetas/recetas.module#RecetasModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(rutas,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRutasModule {


}
