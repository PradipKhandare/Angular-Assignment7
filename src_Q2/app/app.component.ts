import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural-Directive';


  constructor(){}
   public fun() : string
  {
    return "Marvellous Infosystems";
  }
}
