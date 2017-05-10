import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filtrar',
  pure: false
})
export class Filtro implements PipeTransform {

  transform(entrada: any, filterString: string, nombrePropiedad: string): any {

    if (entrada.length === 0 || filterString === '' || filterString === null || filterString === undefined) {
      return entrada;
    }

    const resultadoArray = [];
    for (const objeto of entrada) {
      if ((objeto[nombrePropiedad].toLowerCase()).includes(filterString.toLowerCase())) {
        resultadoArray.push(objeto);
      }
    }
    return resultadoArray;
  }
}
