import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list-feature/store/shopping-list.actions';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute,
                private router: Router,
                private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.route.params
            .pipe(
                map(params => {
                    return +params['recipeId'];
                }),
                switchMap(id => {
                    this.id = id;
                    return this.store.select('recipes');
                }),
                map(recipesState => {
                    return recipesState.recipes.find((recipe, index) => {
                        return index === this.id;
                    });
                })
            )
            .subscribe(recipe => {
                this.recipe = recipe;
            });
    }

    addIngredientsToShoppingList() {
        // this.recipeService.addIngredients(this.recipe.ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
        // this.recipeService.deleteRecipe(this.id);
        this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
        this.router.navigate(['recipes']);
    }

}
