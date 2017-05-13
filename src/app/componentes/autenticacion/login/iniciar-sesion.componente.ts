import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AutenticacionServicio} from "../../../servicios/autenticacion.servicio";

@Component({
  selector: 'app-login',
  templateUrl: './iniciar-sesion.componente.html',
  styleUrls: ['./iniciar-sesion.componente.css']
})
export class IniciarSesionComponente implements OnInit {

  estado: string = '';
  usuarioAutenticado = false;

  constructor(private _autenticacionService: AutenticacionServicio) {
  }

  ngOnInit() {
  }

  onLogin(formulario: NgForm, evento: Event) {

    this._autenticacionService.usuarioAutenticadoSub.subscribe((condicion: boolean) => {
      console.log('iniciar sesion componente ' + condicion);
      this.usuarioAutenticado = condicion;
      if (this.usuarioAutenticado) {
        formulario.resetForm();
        this.estado = '';
      } else {
        formulario.setValue({email: email, passw: ''});
        this.estado = 'Usuario o contraseña incorrectos';
      }
    });

    this.estado = 'Iniciando sesion...';

    evento.preventDefault();

    const email = formulario.value.email;
    const passw = formulario.value.passw;

    this._autenticacionService.loginConEmail(email, passw);
  }

}
