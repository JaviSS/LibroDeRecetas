import {Component, OnInit} from "@angular/core";
import {RecetaServicio} from "../../../servicios/receta.servicio";
import {AutenticacionServicio} from "../../../servicios/autenticacion.servicio";


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  urlImagenUsuario: string = 'https://pbs.twimg.com/profile_images/593501983413112834/0ByVzPw6.jpg';

  constructor(private recetaServicio: RecetaServicio, private _autenticacionService: AutenticacionServicio) {


  }

  ngOnInit(): void {

    this._autenticacionService.usuarioAutenticadoSub.subscribe((res: boolean) => {
      this.usuarioAutenticado = res;
      //if (this.usuarioAutenticado) this.urlImagenUsuario = this._autenticacionService.getImagenUsuario();
    });
  }

  onRecetas() {
    this.recetaServicio.verOeditar.next(false);
  }

  onCerrarSesion(){
    this._autenticacionService.cerrarSesion();
  }

}
