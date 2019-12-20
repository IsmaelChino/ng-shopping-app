import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['recipeId']);
        this.route.params.subscribe(
            (params: Params) => {
                this.recipe = this.recipeService.getRecipe(+params['recipeId']);
            }
        );
    }

    addIngredientsToShoppingList() {
        this.recipeService.addIngredients(this.recipe.ingredients);
    }

}
