import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../shared/material/material.module';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishesListItemComponent } from './dishes-list/dishes-list-item/dishes-list-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [     
    DishesListComponent, 
    DishDetailsComponent, 
    AddDishComponent, 
    DishesListItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    FormsModule
  ]
})
export class DishesModule { }
