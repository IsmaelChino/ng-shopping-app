import { ShoppingListService } from './../shopping-list-feature/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!',
     'https://thestayathomechef.com/wp-content/uploads/2018/03/German-Schnitzel-3-small.jpg',
     [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 20)
     ]),
     new Recipe('Big Fat Burger', 'What else you need to say?',
     'https://st2.depositphotos.com/1004118/11101/i/950/depositphotos_111014890-stock-photo-big-fat-burger.jpg',
     [
       new Ingredient('Buns', 2),
       new Ingredient('Meat', 1)
     ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
