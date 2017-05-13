import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutenticacionServicio} from "../../../servicios/autenticacion.servicio";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _autenticacionService : AutenticacionServicio) { }

  ngOnInit() {
  }

  onRegistrar(formulario:NgForm, evento:Event){

    let ok = false;

    evento.preventDefault();

    const email = formulario.value.email;
    const passw = formulario.value.passw;

    this._autenticacionService.registrarConEmail(email,passw);
    if (ok){
      formulario.resetForm();
    } else {
      formulario.setValue({passw:''});
    }
  }

}
