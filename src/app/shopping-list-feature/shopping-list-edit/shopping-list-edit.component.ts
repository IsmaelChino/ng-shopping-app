import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    onAddIngredient() {
        this.shoppingListService.addIngredient(
            new Ingredient(
                this.nameInput.nativeElement.value,
                this.amountInput.nativeElement.value
            )
        );
    }

}
