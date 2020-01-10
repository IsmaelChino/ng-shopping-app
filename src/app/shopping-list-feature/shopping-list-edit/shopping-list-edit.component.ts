import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f', {static: true}) shoppingListForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItem: Ingredient;

    constructor(
        private shoppingListService: ShoppingListService,
        private store: Store<fromApp.AppState>
    ) {}

    ngOnInit() {
        this.subscription = this.store.select('shoppingList').subscribe(stateData => {
            if (stateData.editedIngredientIndex > -1) {
                this.editMode = true;
                this.editedItem = stateData.editedIngredient;
                this.shoppingListForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            } else {
                this.editMode = false;
            }
        });
        // this.subscription = this.shoppingListService.startedEditing
        //     .subscribe(
        //         (index: number) => {
        //             this.editedItemIndex = index;
        //             this.editMode = true;
        //             this.editedItem = this.shoppingListService.getIngredient(index);
        //             this.shoppingListForm.setValue({
        //                 name: this.editedItem.name,
        //                 amount: this.editedItem.amount
        //             });
        //         }
        //     );
    }

    onAddIngredient() {
        const newIngredient = new Ingredient(
            this.shoppingListForm.value.name,
            this.shoppingListForm.value.amount
        );
        if (this.editMode) {
            // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
            this.store.dispatch(
                new ShoppingListActions.UpdateIngredient(newIngredient)
            );
        } else {
            // this.shoppingListService.addIngredient(newIngredient);
            this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
        }
        this.onClear();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.store.dispatch(new ShoppingListActions.StopEdit());
    }

    onClear() {
        this.shoppingListForm.reset();
        this.editMode = false;
        this.store.dispatch(new ShoppingListActions.StopEdit());
    }

    onDelete() {
        // this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.onClear();
    }

}
