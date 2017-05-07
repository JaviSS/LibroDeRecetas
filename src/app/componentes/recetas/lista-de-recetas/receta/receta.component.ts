import {Component, Input, OnInit} from "@angular/core";
import {Receta} from "../../../receta.model";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;
  @Input() idReceta: number;

  ngOnInit() {
  }
}
