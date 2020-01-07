import { LoggingService } from './../logging.service';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: ShoppingListComponent}
    ]),
    SharedModule,
    FormsModule
  ]
  // providers: [LoggingService]
})
export class ShoppingListModule {}
