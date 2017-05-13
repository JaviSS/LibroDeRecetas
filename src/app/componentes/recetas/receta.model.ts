import {Ingrediente} from "../../compartido/ingrediente.model";
export class Receta {
  public nombre: string;
  public descripcion: string;
  public rutaImagen: string;
  public ingredientes: Ingrediente[];

  constructor(nombre: string, descripcion: string, rutaImagen: string, ingredientes: Ingrediente[]) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.rutaImagen = rutaImagen;
    this.ingredientes = ingredientes;
  }
}
