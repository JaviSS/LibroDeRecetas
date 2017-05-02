import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Receta} from "../../receta.model";

@Component({
  selector: 'app-lista-de-recetas',
  templateUrl: './lista-de-recetas.component.html',
  styleUrls: ['./lista-de-recetas.component.css']
})
export class ListaDeRecetasComponent implements OnInit {

  @Output() recetaEvento = new EventEmitter<Receta>();

  recetas: Receta[] = [
    new Receta('Receta de prueba',
      'lalsldallsakdm lkamd lkasmdlkasm lkdj jsdk jasjkd asjkd asjk daskj dakjsd kjas dajks dakjs dakjhjkda dalkdñl akdñalasm dlkasm dalksdm alsk dmakl dmalk damaslkdadladl ',
      'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201702/x_tdy_ov_food_perfectfriedegg_170207.today-inline-vid-featured-desktop.jpg'),
    new Receta('Receta de prueba2',
      'lalsldallsakdm lkamd lkasmdlkasm lkdj jsdk jasjkd asjkd asjk daskj dakjsd kjas dajks dakjs dakjhjkda dalkdñl akdñalasm dlkasm dalksdm alsk dmakl dmalk damaslkdadladl ',
      'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201702/x_tdy_ov_food_perfectfriedegg_170207.today-inline-vid-featured-desktop.jpg'),
    new Receta('Receta de prueb3',
      'lalsldallsakdm lkamd lkasmdlkasm lkdj jsdk jasjkd asjkd asjk daskj dakjsd kjas dajks dakjs dakjhjkda dalkdñl akdñalasm dlkasm dalksdm alsk dmakl dmalk damaslkdadladl ',
      'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201702/x_tdy_ov_food_perfectfriedegg_170207.today-inline-vid-featured-desktop.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecetaSeleccionada(receta: Receta){
    this.recetaEvento.emit(receta);
  }

}
