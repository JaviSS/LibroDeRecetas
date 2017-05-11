import {Component, OnInit} from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  featureSelected: string = 'recetas';

  onNavigate(feature: string) {
    this.featureSelected = feature;
  }


  ngOnInit(): void {
    firebase.initializeApp({
        apiKey: "AIzaSyClT6bgban8jIvahAL9V7DwuhhXVepVgnA",
        authDomain: "blabla-112fc.firebaseapp.com"
      }
    );
  }
}
