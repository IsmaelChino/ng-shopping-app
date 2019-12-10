import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentFlag = true;

  getOptionToDisplay(optionToDisplay: string) {
    if (optionToDisplay === 'Recipes') {
      this.componentFlag = true;
    } else {
      this.componentFlag = false;
    }
  }
}
