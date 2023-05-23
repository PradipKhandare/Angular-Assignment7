import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural-Directive';

  constructor(){};

  DisplayText = ""

  fun()
  {
     //console.log ("Educating for better tomorrow!");

    this.DisplayText = "Educating for better tomorrow!";

  }
}
