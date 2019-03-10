import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  selectedRecipe($event: Recipe) {
    this.recipe = $event;
  }
}
