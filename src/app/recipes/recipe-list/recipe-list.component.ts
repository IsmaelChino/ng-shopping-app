import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7V5bmrW-MB0l6Y0PJE7cwngGig-31UcWG42_Q9_8EGl1dgMVH'),
     new Recipe('A Test Recipe', 'This is simply a test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7V5bmrW-MB0l6Y0PJE7cwngGig-31UcWG42_Q9_8EGl1dgMVH')
  ];

  constructor() { }

  ngOnInit() {
  }

}
