import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecetaServicio} from "../../../servicios/receta.servicio";

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css']
})
export class EditarRecetaComponent implements OnInit {

  idReceta: number;
  modoEditar = false;
  formularioReceta: FormGroup;

  constructor(private actualRoute: ActivatedRoute, private _recetaServicio: RecetaServicio, private router: Router) {
  }

  ngOnInit() {
    this.actualRoute.params.subscribe(
      (params: Params) => {
        this.modoEditar = (params['id'] != null);
        this.idReceta = +params['id'];
        this.initForm();
      }
    )
  }

  private initForm() {

    let nombreDeReceta = '';
    let rutaImagen = '';
    let descripcion = '';
    let ingredientesReceta = new FormArray([]);

    if (this.modoEditar) {
      const receta = this._recetaServicio.getRecetaPorId(this.idReceta);
      nombreDeReceta = receta.nombre;
      rutaImagen = receta.rutaImagen;
      descripcion = receta.descripcion;
      if (receta.ingredientes) {
        for (let ingrediente of receta.ingredientes)
          ingredientesReceta.push(
            new FormGroup({
              'nombre': new FormControl(ingrediente.nombre, Validators.required),
              'cantidad': new FormControl(ingrediente.cantidad, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }));
      }
    }

    this.formularioReceta = new FormGroup({
      'nombre': new FormControl(nombreDeReceta, Validators.required),
      'rutaImagen': new FormControl(rutaImagen, Validators.required),
      'descripcion': new FormControl(descripcion, Validators.required),
      'ingredientes': ingredientesReceta
    });
    console.log(this.formularioReceta);
  }

  onSubmit() {
    if (this.modoEditar) {
      // const nuevaReceta = new Receta(
      //   this.formularioReceta.value['nombre'],
      //   this.formularioReceta.value['descripcion'],
      //   this.formularioReceta.value['rutaImagen'],
      //   this.formularioReceta.value['ingredientes']
      // );
      this._recetaServicio.actualizarReceta(this.idReceta, this.formularioReceta.value);
    } else {
      this._recetaServicio.insertarReceta(this.formularioReceta.value);
    }

    this.limpiarYsalir();
  }


  limpiarYsalir() {
    this.formularioReceta.reset();
    this.router.navigate(['']);
  }

  onNuevoIngrediente() {
    (<FormArray>this.formularioReceta.get('ingredientes')).push(new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'cantidad': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
}
