import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
   recipes: Recipe[] = [
     new Recipe('A Test Recipe', 'This is simple Test',
       'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C253'),
     new Recipe('Another Test Recipe', 'This is simple Test',
       'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C253')
   ];
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
