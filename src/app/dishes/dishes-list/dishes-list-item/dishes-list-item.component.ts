import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/shared/models/dish.model';

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent implements OnInit {
  @Input() dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
