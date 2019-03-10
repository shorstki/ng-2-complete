import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Test recipe', 'Yummy',
    'https://www.sgs.com.ng/-/media/global/images/structural-website-images/hero-images/hero-agri-food.jpg?la=en&hash=DC665548B14BB9BE2FC839EE6E628FB26033CB94'
  );

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
