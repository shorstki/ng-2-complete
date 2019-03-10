import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Yummy',
      'https://www.goodfood.com.au/content/dam/images/h/0/f/a/q/i/image.related.wideLandscape.940x529.h0fa4n.png/1515456591895.jpg',
      []
    ),
    new Recipe('Recipe 2', 'Dummy',
      'https://www.goodfood.com.au/content/dam/images/h/1/4/3/d/c/image.related.articleLeadwide.620x349.h1bm3m.png/1551157110037.jpg',
      []
    )
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
