import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/shared/service/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
  providers: [ DishesService ]
})

export class DishesComponent implements OnInit {

  constructor(private dishesService: DishesService ) { }

  ngOnInit() {
  }
}
