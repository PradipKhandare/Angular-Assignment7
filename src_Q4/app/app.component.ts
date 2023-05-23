import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural-Directive';

  constructor(){};
  Upper : string = "";
  Lower : string = "";

  Up()
  {
    this.Upper = "MARVELLOUS INFOSYSTEMS";
  }

  lO()
  {
    this.Lower = "marvellous infosystems";
  }

}
