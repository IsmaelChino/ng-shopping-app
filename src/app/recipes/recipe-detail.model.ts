import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeDetail {
    constructor(public recipe: Recipe, public ingredients: Ingredient[]) {}
}
