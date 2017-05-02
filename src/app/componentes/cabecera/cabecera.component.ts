import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
