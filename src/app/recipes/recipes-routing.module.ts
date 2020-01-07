import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { EmptyRecipeComponent } from './empty-recipe/empty-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
        {path: '', component: EmptyRecipeComponent},
        {path: 'new', component: RecipeEditComponent},
        {
            path: ':recipeId',
            component: RecipeDetailComponent,
            resolve: [RecipesResolverService]
        },
        {
            path: ':recipeId/edit',
            component: RecipeEditComponent,
            resolve: [RecipesResolverService]
        }
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
