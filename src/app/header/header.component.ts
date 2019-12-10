import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() headerSelected = new EventEmitter<string>();
  option: string;

  constructor() { }

  ngOnInit() {
  }

  onRecipes() {
    this.option = 'Recipes';
    this.headerSelected.emit(this.option);
  }

  onShoppingList() {
    this.option = 'Shopping List';
    this.headerSelected.emit(this.option);
  }

}
