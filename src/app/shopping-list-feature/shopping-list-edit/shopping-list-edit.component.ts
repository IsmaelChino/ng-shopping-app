import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

    onAddIngredient() {
        this.ingredientAdded.emit({
            name: this.nameInput.nativeElement.value,
            amount: this.amountInput.nativeElement.value
        });
    }

}
